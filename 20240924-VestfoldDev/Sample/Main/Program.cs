using Cratis.Applications.Swagger;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSwaggerGen(_ => _.AddConcepts());
builder.UseCratisApplicationModel();
builder.Services.AddDefaultModelNameConvention();
builder.UseCratisMongoDB(options =>
{
    options.Server = "mongodb://localhost:27017";
    options.Database = "VestfoldDev";
});
builder.AddCratisChronicle(options =>
{
    options.EventStore = "VestfoldDev";
    options.SoftwareCommit = "08f068dda50a25c6a0a28b6816b0fc5b17c3603f";
    options.SoftwareVersion = "1.0.0";
    options.ProgramIdentifier = "VestfoldDev";
});

var app = builder.Build();

app.UseCratisApplicationModel();
app.UseCratisChronicle();
app.MapControllers();
app.UseStaticFiles();
app.UseSwagger();
app.UseSwaggerUI(options => options.InjectStylesheet("/swagger-ui/SwaggerDark.css"));

app.Run();
