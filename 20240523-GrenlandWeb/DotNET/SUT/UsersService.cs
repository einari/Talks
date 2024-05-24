
using MongoDB.Driver;

namespace SUT;

public class UsersService(IDatabase database) : IUsersService
{
    readonly IDatabase _database = database;

    public async Task<bool> Exists(string userName) =>
        await _database.GetCollectionFor<User>().Find(u => u.UserName == userName).AnyAsync();

    public async Task<Guid> Register(string userName, string password)
    {
        var user = new User(Guid.NewGuid(), userName, password);
        await _database.GetCollectionFor<User>().InsertOneAsync(user);
        return user.Id;
    }
}
