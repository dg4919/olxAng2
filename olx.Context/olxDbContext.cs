using olx.Entity.Models;
using System.Data.Entity;

namespace olx.Context
{
    public class olxDbContext : DbContext
    {
        public olxDbContext() :
            base("olxDbContext")
        { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Country> Localities { get; set; }

    }
}
