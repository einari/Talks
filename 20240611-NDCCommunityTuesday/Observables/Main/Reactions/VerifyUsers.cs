using EventStore;
using UserSystem.Events;

namespace UserSystem.Reactions;

public class VerifyUsers
{
    public VerifyUsers(IEventLog eventLog)
    {
        eventLog.Stream
            .WhereEventTypesAre(typeof(OnboardingStarted))
            .Subscribe(context =>
            {
                var @event = (OnboardingStarted)context.Content;
                Console.WriteLine($"Verifying user {@event.UserName} with email {@event.Email}");
            });

    }
}