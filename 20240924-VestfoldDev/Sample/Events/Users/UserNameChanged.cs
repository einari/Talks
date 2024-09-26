using Cratis.Chronicle.Events;

namespace Events.Users;

[EventType]
public record UserNameChanged(string UserName);
