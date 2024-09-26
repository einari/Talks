using Microsoft.AspNetCore.Mvc;
using Cratis.Applications.ModelBinding;
using Cratis.Chronicle.EventSequences;
using Events.Users;

namespace Api.Users;

[Route("api/users")]
public class Users(IEventLog eventLog) : ControllerBase
{
    [HttpPost]
    public async Task<Guid> Onboard([FromBody] Onboard command)
    {
        var newUserId = Guid.NewGuid();
        await eventLog.Append(newUserId.ToString(), new OnboardingStarted(command.UserName, command.Email));
        return newUserId;
    }

    [HttpPost("change-password")]
    public Task ChangePassword([FromRequest] ChangePassword command)
    {
        return Task.CompletedTask;
    }
}
