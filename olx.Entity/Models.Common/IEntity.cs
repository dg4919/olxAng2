namespace olx.Entity.Models.Common
{
    public interface IEntity<T>
    {
        T Id { get; set; }
    }
}
