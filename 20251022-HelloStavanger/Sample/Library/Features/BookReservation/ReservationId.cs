// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace Library.BookReservation;

public record ReservationId(Guid Value) : ConceptAs<Guid>(Value)
{
    public static readonly ReservationId NotSet = new(Guid.Empty);
    public static implicit operator ReservationId(Guid value) => new(value);
    public static implicit operator EventSourceId(ReservationId id) => new(id.Value.ToString());
    public static ReservationId New() => new(Guid.NewGuid());
}
