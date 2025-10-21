// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Members;

public record MemberFirstName(string Value) : ConceptAs<string>(Value)
{
    public static readonly MemberFirstName NotSet = new(string.Empty);
    public static implicit operator MemberFirstName(string value) => new(value);
}
