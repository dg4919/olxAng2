using olx.Entity.Models;
using System.Linq;

namespace olx.Data
{
    public interface ICategoryRepository : IRepository<Category>
    {
        IQueryable<Category> FindBy_CategoryId(long? cateogryId);
        IQueryable<Category> Find_Category();
        IQueryable<Category> GetAll_Category();
    }
}
