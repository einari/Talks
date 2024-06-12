using System.Collections.Concurrent;

namespace EventStore;

public class EventObservers : IEventObservers
{
    ConcurrentBag<IEventObserver> _observers = new();

    public async Task Next(EventContext context)
    {
        foreach (var observer in _observers)
        {
            await observer.Next(context);
        }

    }

    public void Subscribe(IEventObserver observer) => _observers.Add(observer);
}
