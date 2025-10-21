// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.BookCatalog;
using Library.Members;
using MongoDB.Driver;

namespace Library.BookReservation.Listing;

[ReadModel]
public record BookReservationItem(ReservationId Id, ISBN ISBN, BookTitle Title, MemberId MemberId, MemberFirstName MemberFirstName, MemberLastName MemberLastName)
{
    public static ISubject<IEnumerable<BookReservationItem>> AllReservations(IMongoCollection<BookReservationItem> collection) =>
        collection.Observe();
}

public class BookReservationProjection : IProjectionFor<BookReservationItem>
{
    public void Define(IProjectionBuilderFor<BookReservationItem> builder) => builder
        .AutoMap()
        .From<Reservation.BookReserved>(_ => _
            .UsingKey(ev => ev.ISBN))
        .Join<BookCatalog.Registration.BookRegistered>(_ => _
            .On(m => m.ISBN)
            .Set(m => m.Title).To(ev => ev.Title))
        .Join<Members.Registration.MemberRegistered>(_ => _
            .On(m => m.MemberId)
            .Set(m => m.MemberFirstName).To(ev => ev.FirstName)
            .Set(m => m.MemberLastName).To(ev => ev.LastName));
}
