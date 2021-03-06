using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController: BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> getSecret()
        {
            return "secret text";
        }   


        [HttpGet("not-found")]
        public ActionResult<string> GetNotFound()
        {
            var thing = _context.Users.Find(-1);
            if(thing == null) return NotFound();

            return Ok(thing);
        }   

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
           // try{
                 var thing = _context.Users.
             Find(-1);
             var thingToReturn = thing.ToString();

             return thingToReturn;
           /* }catch(Exception ex){
                return StatusCode(500,"computer says no !");
            }*/
            
        }   

        [HttpGet("bad-request")]
        public ActionResult<string> getBadRequest()
        {
            return BadRequest("this was not a good request");
        }   
    }
}