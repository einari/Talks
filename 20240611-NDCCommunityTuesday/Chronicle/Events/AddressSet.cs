namespace UserSystem.Events;

[EventType("12069189-b060-4f32-8b17-512b8d0e789d")]
public record AddressSet(string Street, string City, string ZipCode, string Country);
