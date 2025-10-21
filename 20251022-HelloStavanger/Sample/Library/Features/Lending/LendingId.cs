// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Lending;

public record LendingId(Guid Value) : ConceptAs<Guid>(Value)
{
    public static readonly LendingId NotSet = new(Guid.Empty);
    public static implicit operator LendingId(Guid value) => new(value);
    public static implicit operator EventSourceId(LendingId id) => new(id.Value.ToString());
    public static LendingId New() => new(Guid.NewGuid());
}
