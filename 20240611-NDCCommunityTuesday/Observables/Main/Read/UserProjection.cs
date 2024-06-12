using System.Reactive.Linq;
using EventStore;
using MongoDB.Driver;
using UserSystem.Events;

namespace UserSystem.Read;

public class UserProjection
{
    public UserProjection(IEventLog eventLog, IMongoCollection<User> collection)
    {
        var users = eventLog.Stream
            .WhereEventTypesAre(typeof(OnboardingStarted), typeof(OnboardingCompleted), typeof(PasswordChanged))
            .Scan(
                new User(),
                (user, context) => context.Content switch
                    {
                        OnboardingStarted signedUp =>
                            user with
                            {
                                Id = context.Identifier,
                                UserName = signedUp.UserName,
                                Email = signedUp.Email,
                                Password = signedUp.Password
                            },

                        OnboardingCompleted activated =>
                            user with
                            {
                                Id = context.Identifier,
                                Activated = true
                            },

                        PasswordChanged password =>
                            user with
                            {
                                Id = context.Identifier,
                                Password = password.Password
                            },

                        _ => user
                    });

        users.Subscribe(user =>
             collection.ReplaceOneAsync(u => u.Id == user.Id, user, new ReplaceOptions { IsUpsert = true }));
    }
}
