// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.Authors;

public record LastName(string Value) : ConceptAs<string>(Value)
{
    public static readonly LastName NotSet = new(string.Empty);
    public static implicit operator LastName(string value) => new(value);
}
