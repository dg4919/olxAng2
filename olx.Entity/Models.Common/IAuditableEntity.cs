using System;

namespace olx.Entity.Models.Common
{
    public interface IAuditableEntity
    {
        DateTime CreationDate { get; set; }
        long CreatedBy { get; set; }
        DateTime UpdationDate { get; set; }
        long UpdatedBy { get; set; }
    }
}
