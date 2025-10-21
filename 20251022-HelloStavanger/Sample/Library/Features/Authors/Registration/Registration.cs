// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors.Registration;

[Command]
public record RegisterAuthor(FirstName FirstName, LastName LastName)
{
    public (AuthorRegistered, AuthorId) Handle()
    {
        var authorId = AuthorId.New();
        return (new AuthorRegistered(FirstName, LastName), authorId);
    }
}

public class RegisterAuthorValidator : CommandValidator<RegisterAuthor>
{
    public RegisterAuthorValidator()
    {
        RuleFor(c => c.FirstName.Value).NotEmpty().WithMessage("First name is required");
        RuleFor(c => c.LastName.Value).NotEmpty().WithMessage("Last name is required");
    }
}

public class UniqueAuthorName : IConstraint
{
    public void Define(IConstraintBuilder builder) => builder
        .Unique(_ => _
            .On<AuthorRegistered>(e => e.FirstName, e => e.LastName)
            .WithMessage("An author with this name already exists"));
}

[EventType]
public record AuthorRegistered(FirstName FirstName, LastName LastName);
