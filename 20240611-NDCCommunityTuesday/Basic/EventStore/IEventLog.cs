namespace EventStore;

public interface IEventLog
{
    Task Append(string identifier, object @event);
}
