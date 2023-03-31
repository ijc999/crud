const { Router } = require("express");
// Importing the Router module from the Express package

const FILMRouter = Router();
// Creating a new instance of the Router

const {
    getallFILMs,
    addFILM,
    updateFILMActor,
    updateFILM,
    deleteFILM,
    deleteManyFILM,
    findFILM
} = require("./controllers");
// Importing the controller functions from the "./controllers" module

FILMRouter.get("/FILM/getallFILMs", getallFILMs);
// Setting up a route for GET requests to "/FILM/getallFILMs" that will execute the getallFILMs function

FILMRouter.post("/FILM/addFILM", addFILM);
// Setting up a route for POST requests to "/FILM/addFILM" that will execute the addFILM function

FILMRouter.put("/FILM/updateFILM", updateFILM);
// Setting up a route for PUT requests to "/FILM/updateFILM" that will execute the updateFILM function

FILMRouter.delete("/FILM/deleteFILM", deleteFILM);
// Setting up a route for DELETE requests to "/FILM/deleteFILM" that will execute the deleteFILM function

FILMRouter.put("/FILM/updateFILMActor", updateFILMActor);
// Setting up a route for PUT requests to "/FILM/updateFILMActor" that will execute the updateFILMActor function

FILMRouter.delete("/FILM/deleteManyFILM", deleteManyFILM);
// Setting up a route for DELETE requests to "/FILM/deleteManyFILM" that will execute the deleteManyFILM function

FILMRouter.get("/FILM/search/:movieTitle", findFILM)
// Setting up a route for GET requests to "/FILM/search/:movieTitle" that will execute the findFILM function

module.exports = FILMRouter;
// Exporting the FILMRouter module for use in other parts of the application
