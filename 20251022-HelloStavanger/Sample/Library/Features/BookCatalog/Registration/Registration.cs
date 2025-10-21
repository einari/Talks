// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.Authors;

namespace Library.BookCatalog.Registration;

[Command]
public record RegisterBook([Key] ISBN ISBN, BookTitle Title, AuthorId AuthorId, IEnumerable<BookTag> Tags)
{
    public BookRegistered Handle() => new(Title, AuthorId, Tags);
}

public class RegisterBookValidator : CommandValidator<RegisterBook>
{
    public RegisterBookValidator()
    {
        RuleFor(c => c.ISBN.Value).NotEmpty().WithMessage("ISBN is required");
        RuleFor(c => c.Title.Value).NotEmpty().WithMessage("Book title is required");
        RuleFor(c => c.AuthorId.Value).NotEmpty().WithMessage("Author is required");
    }
}

public class UniqueISBN : IConstraint
{
    public void Define(IConstraintBuilder builder) => builder
        .Unique(_ => _
            .On<BookRegistered>()
            .WithMessage("A book with this ISBN already exists"));
}

[EventType]
public record BookRegistered(BookTitle Title, AuthorId AuthorId, IEnumerable<BookTag> Tags);
