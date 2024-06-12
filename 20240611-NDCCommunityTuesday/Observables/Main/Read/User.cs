namespace UserSystem.Read;

public record User(
    string Id = "",
    string UserName = "",
    string Email = "",
    string Password = "",
    bool Activated = false);
