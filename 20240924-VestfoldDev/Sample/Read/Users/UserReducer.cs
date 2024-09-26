using Cratis.Chronicle.Events;
using Cratis.Chronicle.Reducers;
using Events.Users;

namespace Read.Users;

// public class UserReducer : IReducerFor<User>
// {
//     public User? OnboardingStarted(OnboardingStarted @event, User? user, EventContext context) => user is null ?
//         new(Guid.Parse(context.EventSourceId), @event.UserName, @event.Email, string.Empty, false) :
//         user with { UserName = @event.UserName, Email = @event.Email };

//     public User? PasswordChanged(PasswordChanged @event, User? user, EventContext __) =>
//         user with { Password = @event.Password };

//     public User? OnboardingCompleted(OnboardingCompleted _, User? user, EventContext __) =>
//         user with { IsOnboarded = true };
// }
