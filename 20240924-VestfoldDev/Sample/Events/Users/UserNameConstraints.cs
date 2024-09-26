using Cratis.Chronicle.Events.Constraints;

namespace Events.Users;

public class UserNameConstraints : IConstraint
{
    public void Define(IConstraintBuilder builder) => builder
        .Unique(u => u
            .On<OnboardingStarted>(e => e.UserName)
            .On<UserNameChanged>(e => e.UserName)
            .WithMessage($"User name '{{{WellKnownConstraintDetailKeys.PropertyValue}}}' is already in use"));
}
