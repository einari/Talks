namespace EventStore;

public record EventContext(ulong SequenceNumber, string Identifier, string EventType, string CausedBy, string[] Causation, DateTimeOffset Occurred, object Content);
