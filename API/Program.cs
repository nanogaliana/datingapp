using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
{ 
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//lo quitaron, pero yo lo comento para probarlo
//// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();

var app = builder.Build();
//app.UseAuthorization();
app.MapControllers();
app.Run();
