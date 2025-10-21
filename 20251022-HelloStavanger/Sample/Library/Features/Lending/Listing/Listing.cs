// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.BookCatalog;
using Library.Members;
using MongoDB.Driver;

namespace Library.Lending.Listing;

[ReadModel]
public record LendingItem(LendingId Id, ISBN ISBN, BookTitle Title, MemberId MemberId, MemberFirstName MemberFirstName, MemberLastName MemberLastName, DateTimeOffset LentAt)
{
    public static ISubject<IEnumerable<LendingItem>> AllLendings(IMongoCollection<LendingItem> collection) =>
        collection.Observe();
}

public class LendingItemProjection : IProjectionFor<LendingItem>
{
    public void Define(IProjectionBuilderFor<LendingItem> builder) => builder
        .AutoMap()
        .From<LendOut.BookLent>(_ => _
            .UsingKey(ev => ev.ISBN))
        .Join<BookCatalog.Registration.BookRegistered>(_ => _
            .On(m => m.ISBN)
            .Set(m => m.Title).To(ev => ev.Title))
        .Join<Members.Registration.MemberRegistered>(_ => _
            .On(m => m.MemberId)
            .Set(m => m.MemberFirstName).To(ev => ev.FirstName)
            .Set(m => m.MemberLastName).To(ev => ev.LastName));
}
