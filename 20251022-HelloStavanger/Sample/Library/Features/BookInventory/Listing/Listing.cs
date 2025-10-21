// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.Authors;
using Library.BookCatalog;
using MongoDB.Driver;

namespace Library.BookInventory.Listing;

[ReadModel]
public record InventoryItem(ISBN ISBN, BookTitle Title, AuthorId AuthorId, int AvailableCount, int TotalCount)
{
    public static ISubject<IEnumerable<InventoryItem>> AllInventoryItems(IMongoCollection<InventoryItem> collection) =>
        collection.Observe();
}

public class InventoryItemProjection : IProjectionFor<InventoryItem>
{
    public void Define(IProjectionBuilderFor<InventoryItem> builder) => builder
        .From<BookCatalog.Registration.BookRegistered>(_ => _
            .Set(m => m.Title).To(ev => ev.Title)
            .Set(m => m.AuthorId).To(ev => ev.AuthorId)
            .Set(m => m.AvailableCount).ToValue(0)
            .Set(m => m.TotalCount).ToValue(0))
        .From<Registration.BooksAddedToInventory>(_ => _
            .Add(m => m.AvailableCount).With(ev => ev.Count)
            .Add(m => m.TotalCount).With(ev => ev.Count))
        .From<Adjustment.InventoryAdjustedForLostBooks>(_ => _
            .Subtract(m => m.AvailableCount).With(ev => ev.Count)
            .Subtract(m => m.TotalCount).With(ev => ev.Count))
        .From<BookReservation.Reservation.BookReserved>(_ => _
            .UsingKey(ev => ev.ISBN)
            .Subtract(m => m.AvailableCount).With(ev => 1))
        .From<Lending.LendOut.BookLent>(_ => _
            .UsingKey(ev => ev.ISBN)
            .Subtract(m => m.AvailableCount).With(ev => 1));
}
