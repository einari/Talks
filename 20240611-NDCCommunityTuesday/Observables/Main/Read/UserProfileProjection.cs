using System.Reactive.Linq;
using EventStore;
using MongoDB.Driver;
using UserSystem.Events;

namespace UserSystem.Read;

public class UserProfileProjection
{
    public UserProfileProjection(IEventLog eventLog, IMongoCollection<UserProfile> collection)
    {
        var userProfiles = eventLog.Stream
            .WhereEventTypesAre(typeof(AddressSet))
            .Scan(
                new UserProfile(),
                (userProfile, context) => context.Content switch
                {
                    AddressSet address =>
                        userProfile with
                        {
                            Id = context.Identifier,
                            Street = address.Street,
                            City = address.City,
                            ZipCode = address.ZipCode,
                            Country = address.Country
                        },
                    _ => userProfile
                });

        userProfiles.Subscribe(userProfile =>
             collection.ReplaceOneAsync(u => u.Id == userProfile.Id, userProfile, new ReplaceOptions { IsUpsert = true }));

    }
}
