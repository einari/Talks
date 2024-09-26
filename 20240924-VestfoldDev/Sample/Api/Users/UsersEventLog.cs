using Cratis.Chronicle.EventSequences;
using Microsoft.AspNetCore.Mvc;
using Events.Users;
using Cratis.Applications.ModelBinding;

namespace Api.Users;

// [Route("api/users/event-log")]
// public class UsersEventLog(IEventLog eventLog) : ControllerBase
// {
//     [HttpPost]
//     public async Task<Guid> Onboard([FromBody] Onboard command)
//     {
//         var newUserId = Guid.NewGuid();
//         await eventLog.Append(newUserId.ToString(), new OnboardingStarted(command.UserName, command.Email));
//         return newUserId;
//     }

//     [HttpPost("change-password")]
//     public async Task ChangePassword([FromRequest] ChangePassword command)
//     {
//         await eventLog.Append(command.UserId, new PasswordChanged(command.NewPassword));
//     }
// }
