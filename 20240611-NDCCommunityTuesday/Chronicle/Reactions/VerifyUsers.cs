
using UserSystem.Events;

namespace UserSystem.Reactions;

[Observer("7cd89d1e-5802-4d86-aaf3-889a731c8e60")]
public class VerifyUser
{
    public Task OnboardingStarted(OnboardingStarted @event, EventContext eventContext)
    {
        // Send an email to the user
        Console.WriteLine($"Verifying user {@event.UserName} with email {@event.Email}");
        return Task.CompletedTask;
    }
}
