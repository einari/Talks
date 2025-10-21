// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.BookCatalog;

public record BookTitle(string Value) : ConceptAs<string>(Value)
{
    public static readonly BookTitle NotSet = new(string.Empty);
    public static implicit operator BookTitle(string value) => new(value);
}
