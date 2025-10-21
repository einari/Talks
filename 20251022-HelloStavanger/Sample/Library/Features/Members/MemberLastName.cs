// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Members;

public record MemberLastName(string Value) : ConceptAs<string>(Value)
{
    public static readonly MemberLastName NotSet = new(string.Empty);
    public static implicit operator MemberLastName(string value) => new(value);
}
