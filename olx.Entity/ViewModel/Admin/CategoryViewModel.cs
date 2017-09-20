using olx.Entity.Models;
using System.Collections.Generic;
using System.Linq;

namespace olx.Entity.ViewModel.Admin
{
    public class CategoryViewModel
    {
        public long Id { get; set; }
        public string category_name { get; set; }
        public string icon_name { get; set; }
        public bool status { get; set; }

        public static IQueryable<CategoryViewModel> parse(IQueryable<Category> modelList)
        {
            return modelList.Select(x => new CategoryViewModel
            {
                Id = x.Id,
                category_name = x.CategoryName,
                icon_name = x.ImageUrl,
                status = x.Status
            });
        }

        public static dynamic parse1(IQueryable<Category> modelList)
        {
            return modelList.Select(x => new
            {
                Id = x.Id,
                category_name = x.CategoryName,
                icon_name = x.ImageUrl,
                categorys_2 = x.Categories.Select(y => new
                {
                    Id = y.Id,
                    category_name = y.CategoryName,
                    icon_name = y.ImageUrl,
                    categorys_3 = y.Categories.Select(z => new
                    {
                        Id = z.Id,
                        category_name = z.CategoryName
                    })
                })
            });
        }

        public static dynamic parsee(IQueryable<Category> modelList)
        {
            return modelList
                  .Where(x => x.CategryLevel == 1)
                  .Select(x => new
                  {
                      Id = x.Id,
                      category_name = x.CategoryName,
                      icon_name = x.ImageUrl,
                      sub_categorys = x.Categories.Select(y => new
                      {
                          y.Id,
                          category_name = y.CategoryName,
                          icon_name = y.ImageUrl
                      })
                  });
        }
    }

    public class locality_ViewModel
    {
        public string[] cityNames { get; set; }
        public int cityId { get; set; }
    }

    public class countryViewModel
    {
        #region Properties 

        public long Id { get; set; }

        public string CityName { get; set; }

        public long? CityId { get; set; }

        public short Level { get; set; }
        public bool isPopular { get; set; }
        public bool Status { get; set; }

        #endregion

        public static IQueryable<countryViewModel> parse(IQueryable<Country> modelList)
        {
            return modelList.Select(x => new countryViewModel
            {
                Id = x.Id,
                CityName = x.CityName,
                CityId = x.ParentId,
                Level = x.Level,
                isPopular = x.isPopular
            });
        }

    }
}
