namespace EventStore;

public interface IEventObservers
{
    Task Next(EventContext context);
    void Subscribe(IEventObserver observer);
}
