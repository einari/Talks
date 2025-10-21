// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.BookCatalog;

namespace Library.BookInventory.Registration;

[Command]
public record AddBooksToInventory([Key] ISBN ISBN, int Count)
{
    public BooksAddedToInventory Handle() => new(Count);
}

public class AddBooksToInventoryValidator : CommandValidator<AddBooksToInventory>
{
    public AddBooksToInventoryValidator()
    {
        RuleFor(c => c.ISBN.Value).NotEmpty().WithMessage("ISBN is required");
        RuleFor(c => c.Count).GreaterThan(0).WithMessage("Count must be greater than zero");
    }
}

[EventType]
public record BooksAddedToInventory(int Count);
