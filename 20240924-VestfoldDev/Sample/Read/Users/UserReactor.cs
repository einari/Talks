using Cratis.Chronicle.Events;
using Cratis.Chronicle.Reactors;
using Events.Users;
using MongoDB.Driver;

namespace Read.Users;

// public class UserReactor(IMongoCollection<User> collection) : IReactor
// {
//     public async Task OnboardingStarted(OnboardingStarted @event, EventContext context)
//     {
//         var id = Guid.Parse(context.EventSourceId);
//         var user = new User(id, @event.UserName, @event.Email, string.Empty, false);
//         await collection.ReplaceOneAsync(_ => _.Id == id, user, new ReplaceOptions { IsUpsert = true });
//     }

//     public async Task PasswordChanged(PasswordChanged @event, EventContext context)
//     {
//         var id = Guid.Parse(context.EventSourceId);
//         await collection.UpdateOneAsync(_ => _.Id == id, Builders<User>.Update.Set(_ => _.Password, @event.Password));
//     }

//     public async Task OnboardingCompleted(OnboardingCompleted _, EventContext context)
//     {
//         var id = Guid.Parse(context.EventSourceId);
//         await collection.UpdateOneAsync(_ => _.Id == id, Builders<User>.Update.Set(_ => _.IsOnboarded, true));
//     }
// }
