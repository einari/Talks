// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.BookCatalog;

namespace Library.BookInventory.Adjustment;

[Command]
public record AdjustInventoryForLostBooks([Key] ISBN ISBN, int Count)
{
    public InventoryAdjustedForLostBooks Handle() => new(Count);
}

public class AdjustInventoryForLostBooksValidator : CommandValidator<AdjustInventoryForLostBooks>
{
    public AdjustInventoryForLostBooksValidator()
    {
        RuleFor(c => c.ISBN.Value).NotEmpty().WithMessage("ISBN is required");
        RuleFor(c => c.Count).GreaterThan(0).WithMessage("Count must be greater than zero");
    }
}

[EventType]
public record InventoryAdjustedForLostBooks(int Count);
