using UserSystem.Events;

namespace UserSystem.Api;

[Route("/api/users")]
public class Users(IEventLog eventLog) : ControllerBase
{
    [HttpPost("signup")]
    public Task Signup([FromBody] SignupUser command) =>
        eventLog.Append(command.UserId, new OnboardingStarted(command.UserName, command.Email, command.Password));

    [HttpPost("activate")]
    public Task Activate([FromBody] ActivateUser command) =>
        eventLog.Append(command.UserId, new OnboardingCompleted());

    [HttpPost("set-address")]
    public Task SetAddress([FromBody] SetAddress command) =>
        eventLog.Append(command.UserId, new AddressSet(command.Street, command.City, command.ZipCode, command.Country));

    [HttpPost("set-password")]
    public Task SetPassword([FromBody] SetPassword command) =>
        eventLog.Append(command.UserId, new PasswordChanged(command.Password));
}
