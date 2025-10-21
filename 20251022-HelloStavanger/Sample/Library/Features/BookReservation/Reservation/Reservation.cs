// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.BookCatalog;
using Library.Members;

namespace Library.BookReservation.Reservation;

[Command]
public record ReserveBook(ISBN ISBN, MemberId MemberId)
{
    public (BookReserved, ReservationId) Handle()
    {
        var reservationId = ReservationId.New();
        return (new BookReserved(ISBN, MemberId), reservationId);
    }
}

public class ReserveBookValidator : CommandValidator<ReserveBook>
{
    public ReserveBookValidator()
    {
        RuleFor(c => c.ISBN.Value).NotEmpty().WithMessage("ISBN is required");
        RuleFor(c => c.MemberId.Value).NotEmpty().WithMessage("Member is required");
    }
}

[EventType]
public record BookReserved(ISBN ISBN, MemberId MemberId);
