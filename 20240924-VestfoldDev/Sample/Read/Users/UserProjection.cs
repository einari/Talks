using Cratis.Chronicle.Projections;
using Events.Users;

namespace Read.Users;

public class UserProjection : IProjectionFor<User>
{
    public void Define(IProjectionBuilderFor<User> builder) => builder
        .AutoMap()
        .From<OnboardingStarted>()
        .From<PasswordChanged>()
        .From<OnboardingCompleted>(b => b
            .Set(u => u.IsOnboarded).ToValue(true));
}
