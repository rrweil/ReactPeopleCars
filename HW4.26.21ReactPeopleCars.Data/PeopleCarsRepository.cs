using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HW4._26._21ReactPeopleCars.Data
{
    public class PeopleCarsRepository
    {
        private readonly string _connectionString;

        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddPerson(Person person)
        {
            var ctx = new PeopleCarsContext(_connectionString);
            ctx.People.Add(person);
            ctx.SaveChanges();
        }

        public List<Person> GetPeople() 
        {
            var ctx = new PeopleCarsContext(_connectionString);
            return ctx.People.Include(p => p.Cars).ToList();
        }

        public Person GetPersonById(int id)
        {
            var ctx = new PeopleCarsContext(_connectionString);
            return ctx.People.Include(person => person.Cars).FirstOrDefault(person => person.Id == id);

        }

        public void AddCar(int personId, Car car)
        {
            var ctx = new PeopleCarsContext(_connectionString);
            car.person = ctx.People.FirstOrDefault(p => p.Id == personId);
            ctx.Cars.Add(car);
            ctx.SaveChanges();
        }

        public void DeleteCars (List<Car> cars)
        {
            var ctx = new PeopleCarsContext(_connectionString);
            foreach (Car c in cars)
            {
                ctx.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE Id = {c.Id}");
            }
        }

    }
}
