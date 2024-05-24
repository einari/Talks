using Microsoft.AspNetCore.Mvc;

namespace SUT.for_UsersController.when_registering_user;

public class and_user_already_exists : given.a_users_controller
{
    IActionResult _result;

    void Establish() => _usersService.Exists(Arg.Any<string>()).Returns(true);

    async Task Because() => _result = await _controller.Register(new RegisterUser("fn", "ln", "ssn", "un", "pw"));

    [Fact] void should_return_conflict() => _result.ShouldBeOfExactType<ConflictObjectResult>();
    [Fact] void should_not_register_user() => _usersService.DidNotReceiveWithAnyArgs().Register(default!, default!);
    [Fact] void should_not_create_user_details() => _userDetailsService.DidNotReceiveWithAnyArgs().Register(default!, default!, default!, default!);
}
