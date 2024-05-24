
using SUT;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<IUsersService, UsersService>();
builder.Services.AddSingleton<IUserDetailsService, UserDetailsService>();
builder.Services.AddSingleton<IDatabase, Database>();

var app = builder.Build();
app.UseRouting();
#pragma warning disable ASP0014 // Suggest using top level route registrations
app.UseEndpoints(_ => _.MapControllers());
#pragma warning restore ASP0014 // Suggest using top level route registrations
app.Run();
