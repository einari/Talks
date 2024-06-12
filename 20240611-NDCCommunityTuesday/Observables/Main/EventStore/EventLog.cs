using System.Reactive.Subjects;
using MongoDB.Driver;

namespace EventStore;

public class EventLog : IEventLog, IDisposable
{
    readonly Subject<EventContext> _stream = new();
    readonly IMongoCollection<EventContext> _collection;
    ulong _sequenceNumber = 0;

    public EventLog(IMongoCollection<EventContext> collection)
    {
        _collection = collection;
        _collection.Find(Builders<EventContext>.Filter.Empty)
            .SortByDescending(e => e.SequenceNumber)
            .Limit(1)
            .Project(e => e.SequenceNumber)
            .FirstOrDefaultAsync()
            .ContinueWith(task =>
            {
                if (task.IsCompletedSuccessfully)
                {
                    _sequenceNumber = task.Result + 1;
                }
            });
    }

    public IObservable<EventContext> Stream => _stream;

    public async Task Append(string identifier, object @event)
    {
        var eventContext = new EventContext(
            _sequenceNumber++,
            identifier,
            @event.GetType().Name,
            "Einar Ingebrigtsen",
            ["Main Process", "Controller"],
            DateTimeOffset.UtcNow,
            @event);
        await _collection.InsertOneAsync(eventContext);
        _stream.OnNext(eventContext);
    }

    public void Dispose()
    {
        _stream.Dispose();
    }
}