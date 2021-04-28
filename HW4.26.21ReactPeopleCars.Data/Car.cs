using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace HW4._26._21ReactPeopleCars.Data
{
    public class Car
    {
        public int Id { get; set;  }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }

        [JsonIgnore]
        public Person person { get; set; }
    }
}
