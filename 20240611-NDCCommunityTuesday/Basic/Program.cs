using EventStore;
using Main;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Driver;
using UserSystem.Read;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddSingleton<IEventLog, EventLog>();
builder.Services.AddSingleton<IEventObservers, EventObservers>();
builder.Services.AddSingleton<UserProjection>();
builder.Services.AddSingleton<UserProfileProjection>();

BsonClassMap.RegisterClassMap<EventContext>(cm =>
{
    cm.AutoMap();
    cm.MapIdMember(c => c.SequenceNumber);
});

var objectSerializer = new ObjectSerializer(ObjectSerializer.AllAllowedTypes);
BsonSerializer.RegisterSerializer(objectSerializer);
BsonSerializer.RegisterSerializer(new DateTimeOffsetSupportingBsonDateTimeSerializer());

#pragma warning disable CS0618
// Due to what must be a bug in the latest MongoDB drivers, we set this explicitly as well.
// This property is marked obsolete, we'll keep it here till that time
// https://www.mongodb.com/community/forums/t/c-driver-2-11-1-allegedly-use-different-guid-representation-for-insert-and-for-find/8536/3
BsonDefaults.GuidRepresentationMode = GuidRepresentationMode.V3;
#pragma warning restore CS0618
BsonSerializer
    .RegisterSerializer(new GuidSerializer(GuidRepresentation.Standard));

var database = new MongoClient("mongodb://localhost:27017").GetDatabase("user-system-basic");
builder.Services.AddSingleton(database);
builder.Services.AddSingleton(database.GetCollection<EventContext>("event-log"));
builder.Services.AddSingleton(database.GetCollection<User>("users"));
builder.Services.AddSingleton(database.GetCollection<UserProfile>("user-profiles"));

var app = builder.Build();
app.UseRouting();
app.MapControllers();

app.Services.GetRequiredService<UserProjection>();
app.Services.GetRequiredService<UserProfileProjection>();

await app.RunAsync();
