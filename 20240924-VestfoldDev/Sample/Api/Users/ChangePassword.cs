using Microsoft.AspNetCore.Mvc;

namespace Api.Users;

public record ChangePassword(
    [FromRoute] Guid UserId,
    string CurrentPassword,
    string NewPassword,
    string ConfirmPassword);
