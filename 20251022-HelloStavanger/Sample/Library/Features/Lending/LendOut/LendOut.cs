// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.BookCatalog;
using Library.Members;

namespace Library.Lending.LendOut;

[Command]
public record LendBook(ISBN ISBN, MemberId MemberId)
{
    public (BookLent, LendingId) Handle()
    {
        var lendingId = LendingId.New();
        return (new BookLent(ISBN, MemberId, DateTimeOffset.UtcNow), lendingId);
    }
}

public class LendBookValidator : CommandValidator<LendBook>
{
    public LendBookValidator()
    {
        RuleFor(c => c.ISBN.Value).NotEmpty().WithMessage("ISBN is required");
        RuleFor(c => c.MemberId.Value).NotEmpty().WithMessage("Member is required");
    }
}

[EventType]
public record BookLent(ISBN ISBN, MemberId MemberId, DateTimeOffset LentAt);
