using olx.Context;
using olx.Entity.Models;
using System.Linq;

namespace olx.Data
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(olxDbContext dbcontext) : base(dbcontext) { }

        public IQueryable<Category> FindBy_CategoryId(long? cateogryId)
        {
            return FindBy(x => x.CategoryId == cateogryId
                            && x.Status == true);
        }

        public IQueryable<Category> Find_Category()
        {
            return FindBy(x => x.CategryLevel <= 2
                            && x.Status == true);
        }

        public IQueryable<Category> GetAll_Category()
        {
            return FindBy(x => x.CategryLevel == 1
                            && x.Status == true);
        }

    }
}
