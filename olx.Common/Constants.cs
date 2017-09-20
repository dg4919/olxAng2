namespace olx.Common
{
    /// <summary>
    /// static class can directly acces without creatig object of it
    /// constant wrk also if class is non static but staic class can have only static members
    /// </summary>
    public class StatusType     
    {
        public const string NotFound = "notfound";          // constant access usng class_name.constat name
        public const string OK = "ok";
        public const string Success = "success";
        public static string Error { get { return "error"; } }
    }
}
