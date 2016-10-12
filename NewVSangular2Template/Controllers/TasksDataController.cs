using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NewVSangular2Template.Controllers
{
    [Route("api/[controller]")]
    public class TasksDataController : Controller
    {
        private static List<Task> TasksData = new List<Task>
        {
            new Task() {Title = "First Task", Completed=false, Created = DateTime.Now, Updated = DateTime.Now, ButtonText = "Complete" },
            new Task() {Title = "First Task", Completed=false, Created = DateTime.Now, Updated = DateTime.Now, ButtonText = "Complete" },
            new Task() {Title = "First Task", Completed=false, Created = DateTime.Now, Updated = DateTime.Now, ButtonText = "Complete" },
            new Task() {Title = "First Task", Completed=false, Created = DateTime.Now, Updated = DateTime.Now, ButtonText = "Complete" }
        };

        [HttpGet("[action]")]
        public IEnumerable<Task> GetTasks()
        {
            return  TasksData;
        }

        
    }

    public class Task
    {
        public string Title { get; set; }
        public bool Completed { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public string Notes { get; set; }
        public string ButtonText { get; set; }

    }
}
