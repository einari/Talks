namespace Read.Users;

public record User(Guid Id, string UserName, string Email, string Password, bool IsOnboarded);
