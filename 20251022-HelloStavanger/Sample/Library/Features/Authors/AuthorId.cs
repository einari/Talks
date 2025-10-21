// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors;

public record AuthorId(Guid Value) : ConceptAs<Guid>(Value)
{
    public static readonly AuthorId NotSet = new(Guid.Empty);
    public static implicit operator AuthorId(Guid value) => new(value);
    public static implicit operator EventSourceId(AuthorId id) => new(id.Value.ToString());
    public static AuthorId New() => new(Guid.NewGuid());
}
