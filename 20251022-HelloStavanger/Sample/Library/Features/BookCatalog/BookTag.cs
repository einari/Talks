// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.BookCatalog;

public record BookTag(string Value) : ConceptAs<string>(Value)
{
    public static readonly BookTag Empty = new(string.Empty);
    public static implicit operator BookTag(string value) => new(value);
}
