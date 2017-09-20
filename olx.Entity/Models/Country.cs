using olx.Entity.Models.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace olx.Entity.Models
{
    [Table("Country")]   // EF use pluralise name of class, so give our own name for table
    public class Country : Entity<long>
    {
        public string CityName { get; set; }

        public long? ParentId { get; set; }

        [ForeignKey("ParentId")]
        public virtual ICollection<Country> Localities { get; set; }

        public bool Status { get; set; }

        public short Level { get; set; }        // 1 for state or region, 2 = city, 3 = locality
        public bool isPopular { get; set; }
    }
}
