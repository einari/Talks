using Cratis.Chronicle.Aggregates;
using Events.Users;

namespace Domain.Users;

public class User : AggregateRoot
{
    bool _onboarded;

    public Task Onboard(string userName, string email) =>
        Apply(new OnboardingStarted(userName, email));

    public async Task ChangePassword(string password)
    {
        if (!_onboarded)
        {
            await Apply(new OnboardingCompleted());
        }
        await Apply(new PasswordChanged(password));
    }

    public Task On(OnboardingStarted @event)
    {
        _onboarded = false;

        return Task.CompletedTask;
    }

    public Task On(OnboardingCompleted @event)
    {
        _onboarded = true;
        return Task.CompletedTask;
    }
}
