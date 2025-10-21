// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.BookCatalog;

public record ISBN(string Value) : ConceptAs<string>(Value)
{
    public static readonly ISBN NotSet = new(string.Empty);
    public static implicit operator ISBN(string value) => new(value);
    public static implicit operator EventSourceId(ISBN isbn) => new(isbn.Value);
}
