using olx.Entity.Models.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace olx.Entity.Models
{
    public class Category : Entity<long>
    {
        public string CategoryName { get; set; }
        public short CategryLevel { get; set; }
        public string ImageUrl { get; set; }
        public bool Status { get; set; }

        public long? CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public virtual ICollection<Category> Categories { get; set; }
    }
}
