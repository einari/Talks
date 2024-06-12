namespace UserSystem.Read;

public record UserProfile(
    string Id = "",
    string Street = "",
    string City = "",
    string ZipCode = "",
    string Country = "");