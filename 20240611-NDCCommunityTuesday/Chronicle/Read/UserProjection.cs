using Cratis.Chronicle.Projections;
using UserSystem.Events;

namespace UserSystem.Read;

public class UserProjection : IProjectionFor<User>
{
    public ProjectionId Identifier => "8ea8610a-8c30-4d62-9683-e24b3c615195";

    public void Define(IProjectionBuilderFor<User> builder) => builder
        .From<OnboardingStarted>(_ => _
            .Set(m => m.UserName).To(e => e.UserName)
            .Set(m => m.Email).To(e => e.Email)
            .Set(m => m.Password).To(e => e.Password))
        .From<OnboardingCompleted>(_ => _
            .Set(m => m.Activated).ToValue(true))
        .From<PasswordChanged>(_ => _
            .Set(m => m.Password).To(e => e.Password));
}
