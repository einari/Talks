// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors.Removal;

[Command]
public record RemoveAuthor([Key] AuthorId AuthorId)
{
    public AuthorRemoved Handle() => new();
}

public class RemoveAuthorValidator : CommandValidator<RemoveAuthor>
{
    public RemoveAuthorValidator()
    {
        RuleFor(c => c.AuthorId.Value).NotEmpty().WithMessage("Author ID is required");
    }
}

[EventType]
public record AuthorRemoved();
