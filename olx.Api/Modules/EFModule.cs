using Autofac;
using olx.Context;

namespace olx.Api.Modules
{
    public class EFModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType(typeof(olxDbContext)).As(typeof(olxDbContext)).InstancePerLifetimeScope();
        }
    }
}