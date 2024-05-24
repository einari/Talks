namespace SUT;

public class UserDetailsService(IDatabase database) : IUserDetailsService
{
    readonly IDatabase _database = database;

    public Task Register(string firstName, string lastName, string socialSecurityNumber, Guid userId)
        => _database.GetCollectionFor<UserDetails>().InsertOneAsync(new(Guid.NewGuid(), userId, firstName, lastName, socialSecurityNumber));
}
