using olx.Data;
using olx.Entity.ViewModel.Admin;
using System.Web.Http;

namespace olx.Api.api.Site
{
    public class HomeController : ApiController
    {
        private ICategoryRepository categoryRepository { get; set; }
        private ILocalityRepository localityRepository { get; set; }

        [HttpGet]
        public IHttpActionResult getBy_categoryId(long? categoryId)
        {
            var res = CategoryViewModel
                      .parse(categoryRepository
                             .FindBy(x => x.CategoryId == categoryId
                                       && x.Status == true));

            return Ok(new { result = res });
        }

        [HttpGet]
        public IHttpActionResult getCategorys()
        {
            var res = CategoryViewModel
                      .parsee(categoryRepository.Find_Category());
                             
            return Ok(new { result = res });
        }

        [HttpGet]
        public IHttpActionResult getAllCategorys()
        {
            #region  How Data Will be Load
            /* 
               Data will getting only for category level == 1 
               Rest Data (subcategories would be get through its navigation properties
            */
            #endregion
            var res = CategoryViewModel
                      .parse1(categoryRepository.GetAll_Category());

            return Ok(new { result = res });
        }

        [HttpGet]
        public IHttpActionResult get_RegionOrCity()
        {
            var _result = countryViewModel
                          .parse(localityRepository
                                 .get_State_andCity());

            return Ok(new { result = _result });
        }

        public HomeController(
            ICategoryRepository _categoryRepository,
            ILocalityRepository _localityRepository)
        {
            categoryRepository = _categoryRepository;
            localityRepository = _localityRepository;
        }
    }
}
