using Microsoft.AspNetCore.Mvc;
using Cratis.Applications.ModelBinding;
using Cratis.Chronicle.Aggregates;
using Domain.Users;

namespace Api.Users;

[Route("api/users/aggregate-root")]
public class UsersAggregateRoot(IAggregateRootFactory aggregateRootFactory) : ControllerBase
{
    [HttpPost]
    public async Task<Guid> Onboard([FromBody] Onboard command)
    {
        var newUserId = Guid.NewGuid();
        var user = await aggregateRootFactory.Get<User>(newUserId);
        await user.Onboard(command.UserName, command.Email);
        return newUserId;
    }

    [HttpPost("{userId}/change-password")]
    public async Task ChangePassword([FromRequest] ChangePassword command)
    {
        var user = await aggregateRootFactory.Get<User>(command.UserId);
        await user.ChangePassword(command.NewPassword);
    }
}
