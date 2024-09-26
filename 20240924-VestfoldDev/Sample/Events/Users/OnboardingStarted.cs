using Cratis.Chronicle.Events;

namespace Events.Users;

[EventType]
public record OnboardingStarted(string UserName, string Email);
