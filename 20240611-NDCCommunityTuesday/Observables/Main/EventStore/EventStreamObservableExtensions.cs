using System.Reactive.Linq;

namespace EventStore;

public static class EventStreamObservableExtensions
{
    public static IObservable<EventContext> WhereEventTypesAre(this IObservable<EventContext> stream, params Type[] types) =>
        stream.Where(context => types.Contains(context.Content.GetType()));
}