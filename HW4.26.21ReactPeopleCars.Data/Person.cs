using System;
using System.Collections.Generic;

namespace HW4._26._21ReactPeopleCars.Data
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public List<Car> Cars { get; set; }
    }
}
