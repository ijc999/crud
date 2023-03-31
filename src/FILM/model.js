const mongoose = require("mongoose");

// Define the schema for the FILM collection
const FILMSchema = new mongoose.Schema({
    title: {
        type: String,     // A string field
        required: true,   // Must be provided when creating a new document
        unique: true,     // Must be unique among all documents in the collection
    },
    actor: {
        type: String,     // A string field
        required: true,   // Must be provided when creating a new document
    },
    genre: {
        type: String,     // A string field
        default: "no genre specified",  // If not provided, defaults to "no genre specified"
    },
});

// Create a Mongoose model for the FILM collection based on the FILM schema
const FILM = mongoose.model("FILM", FILMSchema);

// Export the FILM model from this module, making it available for other modules to use
module.exports = FILM;
