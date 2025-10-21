// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using MongoDB.Driver;

namespace Library.Authors.Listing;

[ReadModel]
public record Author(AuthorId Id, FirstName FirstName, LastName LastName)
{
    public static ISubject<IEnumerable<Author>> AllAuthors(IMongoCollection<Author> collection) =>
        collection.Observe();
}

public class AuthorProjection : IProjectionFor<Author>
{
    public void Define(IProjectionBuilderFor<Author> builder) => builder
        .AutoMap()
        .From<Registration.AuthorRegistered>()
        .RemovedWith<Removal.AuthorRemoved>();
}
