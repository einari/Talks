using Microsoft.AspNetCore.Mvc;

namespace SUT;

[Route("/api/users")]
public class UsersController(IUsersService usersService, IUserDetailsService userDetailsService) : ControllerBase
{
    readonly IUsersService _usersService = usersService;
    readonly IUserDetailsService _userDetailsService = userDetailsService;

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterUser userRegistration)
    {
        if (await _usersService.Exists(userRegistration.UserName))
        {
            return Conflict("User already exists");
        }
        var userId = await _usersService.Register(userRegistration.UserName, userRegistration.Password);
        await _userDetailsService.Register(
            userRegistration.FirstName,
            userRegistration.LastName,
            userRegistration.SocialSecurityNumber,
            userId);

        return Ok();
    }
}