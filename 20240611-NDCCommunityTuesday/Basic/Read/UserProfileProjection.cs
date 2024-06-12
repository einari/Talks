using EventStore;
using MongoDB.Driver;
using UserSystem.Events;

namespace UserSystem.Read;

public class UserProfileProjection : IEventObserver
{
    readonly IMongoCollection<UserProfile> _collection;

    public UserProfileProjection(IEventObservers eventObservers, IMongoCollection<UserProfile> collection)
    {
        eventObservers.Subscribe(this);
        _collection = collection;
    }

    public async Task Next(EventContext eventContext)
    {
        var userProfile = await _collection.Find(u => u.Id == eventContext.Identifier).FirstOrDefaultAsync() ?? new UserProfile();

        userProfile = eventContext.Content switch
        {
            AddressSet address =>
                userProfile with
                {
                    Id = eventContext.Identifier,
                    Street = address.Street,
                    City = address.City,
                    ZipCode = address.ZipCode,
                    Country = address.Country
                },
            _ => userProfile
        };

        if (string.IsNullOrEmpty(userProfile.Id))
        {
            return;
        }

        await _collection.ReplaceOneAsync(u => u.Id == userProfile.Id, userProfile, new ReplaceOptions { IsUpsert = true });
    }
}
