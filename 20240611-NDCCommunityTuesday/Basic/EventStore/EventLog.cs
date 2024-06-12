using MongoDB.Driver;

namespace EventStore;

public class EventLog : IEventLog
{
    readonly IMongoCollection<EventContext> _collection;
    readonly IEventObservers _observers;
    ulong _sequenceNumber = 0;

    public EventLog(IMongoCollection<EventContext> collection, IEventObservers observers)
    {
        _collection = collection;
        _observers = observers;
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
        await _observers.Next(eventContext);
    }
}
