using Cratis.Chronicle;
using Simple;

using var client = new ChronicleClient("chronicle://localhost:35000");
var eventStore = client.GetEventStore("BlabbediBlah", "Specific namespace");
await eventStore.DiscoverAll();
await eventStore.RegisterAll();
await eventStore.EventLog.Append("b40a0280-7f48-4fd6-ae63-3f487294df68", new SomethingHappened());
