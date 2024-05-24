namespace SUT;

public interface IUsersService
{
    Task<bool> Exists(string userName);
    Task<Guid> Register(string userName, string password);
}
