namespace UserSystem.Events;

[EventType("654eb53f-46ed-4238-91bf-6229f6c4efee")]
public record OnboardingStarted(string UserName, string Email, string Password);
