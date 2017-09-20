using olx.Entity.Models;
using System.Collections.Generic;
using System.Linq;

namespace olx.Data
{
    public interface ILocalityRepository : IRepository<Country>
    {
        IQueryable<Country> get_State_andCity();
        IQueryable<Country> get_All(IEnumerable<Country> list);
        IQueryable<Country> FindSuggestion(IEnumerable<Country> list, string searchText);
    }
}
