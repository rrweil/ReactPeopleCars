using HW4._26._21ReactPeopleCars.Data;
using HW4._26._21ReactPeopleCars.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW4._26._21ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {

        private readonly string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("AddPerson")]
        [HttpPost]
        public void AddPerson (Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }

        [Route("GetPeople")]
        [HttpGet]
        public List<Person> GetPeople()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPeople();
        }

        [Route("GetPersonById")]
        [HttpGet]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPersonById(id);
        }

        [Route("AddCar")]
        [HttpPost]
        public void AddCar(AddCarViewModel vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(vm.PersonId, vm.Car);
            ;
        }

        [Route("DeleteCars")]
        [HttpPost]
        public void DeleteCars(DeleteCarsViewModel vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(vm.Cars);
        }
    }
}
