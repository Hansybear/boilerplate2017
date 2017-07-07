using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace corewithdocker.Models
{
    public class UserDbContext : IdentityDbContext<IdentityUser>
  {
    public UserDbContext(DbContextOptions<UserDbContext> options)
            : base(options)
    {
      Database.EnsureCreated();
    }
  }
}