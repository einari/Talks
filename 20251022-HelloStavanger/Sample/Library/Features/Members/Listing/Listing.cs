// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using MongoDB.Driver;

namespace Library.Members.Listing;

[ReadModel]
public record Member(MemberId Id, MemberFirstName FirstName, MemberLastName LastName)
{
    public static ISubject<IEnumerable<Member>> AllMembers(IMongoCollection<Member> collection) =>
        collection.Observe();
}

public class MemberProjection : IProjectionFor<Member>
{
    public void Define(IProjectionBuilderFor<Member> builder) => builder
        .AutoMap()
        .From<Registration.MemberRegistered>();
}
