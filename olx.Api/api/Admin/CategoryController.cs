using Newtonsoft.Json;
using olx.Common;
using olx.Data;
using olx.Entity.ViewModel.Admin;
using System.IO;
using System.Web;
using System.Web.Http;

namespace olx.Api.api.Admin
{
    public class CategoryController : ApiController
    {
        private ICategoryRepository categoryRepository { get; set; }


        [HttpPost]
        public IHttpActionResult get_all()
        {
            var res = CategoryViewModel.parse(categoryRepository.GetAll());
            return Ok(new { result = res });
        }

        [HttpGet]
        public IHttpActionResult getBy_categoryId(long? categoryId)
        {
            var res = CategoryViewModel.parse(categoryRepository.FindBy(x => x.CategoryId == categoryId));
            
            return Ok(new { result = res });
        }

        [HttpPost]
        public IHttpActionResult create_categoryJson()
        {
            var res = CategoryViewModel.parse(categoryRepository.FindBy(x => x.CategryLevel <= 2));
            var json = JsonConvert.SerializeObject(res);
            string category_file = HttpContext.Current.Server.MapPath("~/JsonData/categories.json");

            File.WriteAllText(category_file, json);
            return Ok(new { result = "ok" });
        }

        [HttpPost]
        public IHttpActionResult update_category(long Id, string icon_name)
        {
            var category = categoryRepository.FindById(Id);

            if(category == null)
                return Ok(new { result = StatusType.NotFound });

            category.ImageUrl = icon_name;
            categoryRepository.Update(category);

            return Ok(new { result = StatusType.OK });
        }

        public CategoryController(
            ICategoryRepository _categoryRepository)
        {
            categoryRepository = _categoryRepository;
        }

    }
}
