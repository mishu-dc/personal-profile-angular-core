using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalProfile.DataAccess.Entitiy;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LearningCore.Helpers;
using PersonalProfile.DataAccess;

namespace PersonalProfile.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        ApplicationDbContext DbContext;
        public ProfileController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public ActionResult GetProfile(string email)
        {
            if (email == null)
            {
                return BadRequest(new { status = "error", message = "Invalid email address" });
            }

            Profile profile = DbContext.Profile
                                .Include(p => p.Achievements)
                                .Include(p => p.Certifications)
                                .Include(p => p.Educations)
                                .Include(p => p.Experiences)
                                .Include(p => p.Projects)
                                .Include(p => p.Publications)
                                .Include(p => p.Skills)
                                .FirstOrDefault(p => p.Email.ToLower().Equals(email.ToLower()));

            if (profile == null)
            {
                return NotFound(new { status = "error", message =string.Format("No profile found with email address: {0}", email) });
            }

            return Ok(profile);
        }

        [HttpPost]
        public async Task<ActionResult> PopulateProfile(string email)
        {
            if (email == null)
            {
                return BadRequest(new { status = "error", message = "Invalid email address." });
            }

            Profile profile = DbContext.Profile
                .FirstOrDefault(p => p.Email.ToLower().Equals(email.ToLower()));

            if (profile != null)
            {
                return BadRequest(new { status = "error", message = string.Format("Profile already exists with email address: {0} ", email) });
            }

            DataLoaderHelper helper = new DataLoaderHelper();
            profile = helper.Populate(email);

            DbContext.Profile.Add(profile);
            await DbContext.SaveChangesAsync();

            return Ok(new { status = "success" });
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteProfile(string email)
        {
            if (email == null)
            {
                return BadRequest(new { status = "error", message = "Invalid email address." });
            }

            Profile profile = DbContext.Profile
                .FirstOrDefault(p => p.Email.ToLower().Equals(email.ToLower()));

            if (profile == null)
            {
                return NotFound(new { status = "error", message = string.Format("No profile found with email address: {0}", email) });
            }

            DbContext.Remove(profile);
            await DbContext.SaveChangesAsync();

            return Ok(new { status = "success" });
        }

        
    }
}