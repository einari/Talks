using Cratis.Chronicle.Reducers;
using UserSystem.Events;

namespace UserSystem.Read;

[Reducer("f7820741-c4b2-4a8f-8c77-d89d1c6a0350")]
public class UserProfileReducer : IReducerFor<UserProfile>
{
    public Task<UserProfile> AddressSet(AddressSet @event, UserProfile? current)
    {
        current ??= new UserProfile();
        return Task.FromResult(current with
        {
            Street = @event.Street,
            City = @event.City,
            ZipCode = @event.ZipCode,
            Country = @event.Country
        });
    }
}