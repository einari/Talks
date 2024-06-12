using UserSystem.Read;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddSingleton(typeof(UserProjection));
builder.Services.AddTransient(typeof(UserProfileReducer));

builder.UseChronicle();

var app = builder.Build();
app.UseRouting();
app.MapControllers();
app.UseChronicle();
app.Run();