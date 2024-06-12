namespace EventStore;

public interface IEventLog
{
    IObservable<EventContext> Stream { get; }

    Task Append(string identifier, object @event);
}
