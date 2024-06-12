using EventStore;
using MongoDB.Driver;
using UserSystem.Events;

namespace UserSystem.Read;

public class UserProjection : IEventObserver
{
    readonly IMongoCollection<User> _collection;

    public UserProjection(IEventObservers eventObservers, IMongoCollection<User> collection)
    {
        eventObservers.Subscribe(this);
        _collection = collection;
    }

    public async Task Next(EventContext eventContext)
    {
        var user = (await _collection.Find(u => u.Id == eventContext.Identifier).FirstOrDefaultAsync()) ?? new User();

        user = eventContext.Content switch
        {
            OnboardingStarted signedUp =>
                user with
                {
                    Id = eventContext.Identifier,
                    UserName = signedUp.UserName,
                    Email = signedUp.Email,
                    Password = signedUp.Password
                },

            OnboardingCompleted activated =>
                user with
                {
                    Id = eventContext.Identifier,
                    Activated = true
                },

            PasswordChanged password =>
                user with
                {
                    Id = eventContext.Identifier,
                    Password = password.Password
                },

            _ => user
        };


        if (string.IsNullOrEmpty(user.Id))
        {
            return;
        }

        await _collection.ReplaceOneAsync(u => u.Id == user.Id, user, new ReplaceOptions { IsUpsert = true });
    }
}
