// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Library.Authors;
using MongoDB.Driver;

namespace Library.BookCatalog.Listing;

[ReadModel]
public record Book(ISBN ISBN, BookTitle Title, AuthorId AuthorId, IEnumerable<BookTag> Tags)
{
    public static ISubject<IEnumerable<Book>> AllBooks(IMongoCollection<Book> collection) =>
        collection.Observe();
}

public class BookProjection : IProjectionFor<Book>
{
    public void Define(IProjectionBuilderFor<Book> builder) => builder
        .AutoMap()
        .From<Registration.BookRegistered>();
}
