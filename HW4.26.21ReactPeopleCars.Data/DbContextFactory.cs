using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace HW4._26._21ReactPeopleCars.Data
{
    public class DbContextFactory : IDesignTimeDbContextFactory<PeopleCarsContext>
    {
        public PeopleCarsContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}HW4.26.21ReactPeopleCars.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PeopleCarsContext(config.GetConnectionString("ConStr"));
        }
    }
}
