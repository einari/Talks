namespace EventStore;

public interface IEventObserver
{
    Task Next(EventContext eventContext);
}