using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos.Table;
using System.Linq;

namespace functions
{
    public static class GamesApi
    {
        [FunctionName("GamesApi")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [Table("Games", "1", Connection = "DatabaseConnection")] CloudTable table,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var query = table.CreateQuery<TableData>();
            query.TakeCount = 1;

            var result = (await table.ExecuteQuerySegmentedAsync(query, null)).ToList();

            if (result.Any())
            {
                var apiResponse = new ApiResponse(
                    result.First().Json
                );

                return new OkObjectResult(apiResponse);
            }
            return new OkResult();
        }
    }

    public record ApiResponse(string Json);

    public class TableData : TableEntity
    {
        public string Json { get; set; }
    }
}

