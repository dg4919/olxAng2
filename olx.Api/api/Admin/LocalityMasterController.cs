using Newtonsoft.Json;
using olx.Data;
using olx.Entity.Models;
using olx.Entity.ViewModel.Admin;
using System;
using System.IO;
using System.Web;
using System.Web.Http;

namespace olx.Api.api.Admin
{
    public class LocalityMasterController : ApiController
    {
        private ILocalityRepository localityRepository { get; set; }

        [HttpPost]
        public IHttpActionResult create_locality(locality_ViewModel model)
        {
            using (var transaction = localityRepository.BeginTransaction())
            {
                try
                {
                    foreach (string city in model.cityNames)
                    {
                        localityRepository.Create(new Country()
                        {
                            CityName = city,
                            ParentId = model.cityId,
                            isPopular = false,
                            Status = true,
                            Level = 2
                        }, false);
                    }
                    localityRepository.Save();
                    transaction.Commit();

                    return Ok(new { result = "ok" });
                }
                catch (Exception)
                {
                    transaction.Rollback();
                }
            }
            return Ok(new { result = "error" });
        }

        [HttpPost]
        public IHttpActionResult create_localityJson()
        {
            var res = countryViewModel.parse(localityRepository.FindBy(x => x.Status == true));
            var json = JsonConvert.SerializeObject(res);
            string category_file = HttpContext.Current.Server.MapPath("~/JsonData/country.json");

            File.WriteAllText(category_file, json);
            return Ok(new { result = "ok" });
        }

        public LocalityMasterController(
            ILocalityRepository _localityRepository)
        {
            localityRepository = _localityRepository;
        }
    }
}
