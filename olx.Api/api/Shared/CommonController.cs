using olx.Data;
using System.Web.Http;

namespace olx.Api.api.Shared
{
    public class CommonController : ApiController
    {
        private ICategoryRepository categoryRepository { get; set; }

        //[HttpGet]
        //public IHttpActionResult getBy_categoryId(long? categoryId)
        //{
        //    var res = CategoryViewModel.parse(categoryRepository.FindBy(x => x.CategoryId == categoryId));

        //    return Ok(new { result = res });
        //}


        public CommonController(
            ICategoryRepository _categoryRepository)
        {
            categoryRepository = _categoryRepository;
        }

    }
}
