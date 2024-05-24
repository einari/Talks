namespace SUT.for_UsersController.given;

public class a_users_controller : Specification
{
    protected IUsersService _usersService;
    protected IUserDetailsService _userDetailsService;
    protected UsersController _controller;

    void Establish()
    {
        _usersService = Substitute.For<IUsersService>();
        _userDetailsService = Substitute.For<IUserDetailsService>();
        _controller = new UsersController(_usersService, _userDetailsService);
    }
}
