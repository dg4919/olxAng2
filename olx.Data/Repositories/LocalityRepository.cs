using olx.Context;
using olx.Entity.Models;
using System.Collections.Generic;
using System.Linq;

namespace olx.Data
{
    public class LocalityRepository : BaseRepository<Country>, ILocalityRepository
    {
        public LocalityRepository(olxDbContext dbcontext) : base(dbcontext) { }

        public IQueryable<Country> get_State_andCity()
        {
            return FindBy(x => x.Level <= 2
                            && x.Status == true);
        }

        public IQueryable<Country> get_All(IEnumerable<Country> list)
        {
            return list.Where(x => x.Status == true)
                       .AsQueryable();
        }

        public IQueryable<Country> FindSuggestion(IEnumerable<Country> list, string searchText)
        {
            return list.Where(x => x.ParentId != null
                                && x.Level <= 2
                                && x.CityName.ToLower().StartsWith(searchText.ToLower())
                                && x.Status == true)
                       .AsQueryable();
        }

    }
}
