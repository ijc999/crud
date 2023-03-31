// Import the FILM model
const FILM = require("./model");

// Add a new FILM to the database
const addFILM = async (request, response) => {
    const newFILM = await FILM.create({
        title: request.body.title,
        actor: request.body.actor,
        genre: request.body.genre,
    });

    const successResponse = {
        message: `Successfully added ${request.body.title}`,
        FILM: newFILM,
    };

    response.send(successResponse);
};

// Retrieve all FILMs from the database
const getallFILMs = async (request, response) => {
    const allFILMs = await FILM.find({});

    const successResponse = {
        message: "Successfully collected all FILMs",
        FILMs: allFILMs,
    };

    response.json(successResponse);
};

// Update the actor of a FILM with a specific actor name
const updateFILMActor = async (request, response) => {
    const updateFILM = await FILM.updateOne(
        { "actor": "Name1 Surname1" },
        { "actor": "Name2 Surname2" });

    response.json({ message: "Successfully Updated!", updateFILM: updateFILM });
};

// Update a FILM with a specific value for a specific key
const updateFILM = async (request, response) => {
    const filterObj = { title: request.body.title };
    const updateObj = { [request.body.updateKey]: request.body.updateValue };
    const updatedFILM = await FILM.updateOne(filterObj, updateObj);

    const successResponse = {
        message: `Successfully replaced ${request.body.updateKey} with ${request.body.updateValue}`,
        updatedFILM: updatedFILM,
    };

    response.json(successResponse);
};

// Delete a FILM from the database by its title
const deleteFILM = async (request, response) => {
    const deletedFILM = await FILM.deleteOne({
        title: request.body.title,
    });

    const successResponse = {
        message: `Successfully deleted ${request.body.title}`,
        deletedFILM: deletedFILM,
    };

    response.json(successResponse);
};

// Delete all FILMs from the database
const deleteManyFILM = async (request, response) => {
    const deleteManyFILM = await FILM.deleteMany({});

    const successResponse = {
        message: "Successfully Deleted",
        deleteManyFILM: deleteManyFILM
    };

    response.send(successResponse);
};

// Find a FILM by its title
const findFILM = async (request, response) => {
    const findaFILM = await FILM.find({ title: request.params.movieTitle })

    const successResponse = {
        message: "FILM successfully found",
        findFILM: findaFILM
    }

    response.json(successResponse);
};

// Export all functions as an object for use in other modules
module.exports = {
    getallFILMs,
    addFILM,
    updateFILMActor,
    updateFILM,
    deleteFILM,
    deleteManyFILM,
    findFILM,
};
