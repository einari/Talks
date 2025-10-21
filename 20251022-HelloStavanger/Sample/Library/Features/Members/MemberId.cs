// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Members;

public record MemberId(Guid Value) : ConceptAs<Guid>(Value)
{
    public static readonly MemberId NotSet = new(Guid.Empty);
    public static implicit operator MemberId(Guid value) => new(value);
    public static implicit operator EventSourceId(MemberId id) => new(id.Value.ToString());
    public static MemberId New() => new(Guid.NewGuid());
}
