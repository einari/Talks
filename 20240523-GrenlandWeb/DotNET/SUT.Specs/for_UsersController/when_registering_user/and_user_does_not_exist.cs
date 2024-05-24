using Microsoft.AspNetCore.Mvc;

namespace SUT.for_UsersController.when_registering_user;

public class and_user_does_not_exist : given.a_users_controller
{
    IActionResult _result;
    RegisterUser _registerUser;
    Guid _userId;

    void Establish()
    {
        _usersService.Exists(Arg.Any<string>()).Returns(false);
        _userId = Guid.NewGuid();
        _registerUser = new RegisterUser("fn", "ln", "ssn", "un", "pw");
        _usersService.Register(_registerUser.UserName, _registerUser.Password).Returns(_userId);
    }

    async Task Because() => _result = await _controller.Register(_registerUser);

    [Fact] void should_return_ok() => _result.ShouldBeOfExactType<OkResult>();
    [Fact] void should_register_user() => _usersService.Received().Register(_registerUser.UserName, _registerUser.Password);
    [Fact] void should_create_user_details() => _userDetailsService.Received().Register(_registerUser.FirstName, _registerUser.LastName, _registerUser.SocialSecurityNumber, _userId);
}

