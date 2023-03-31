// Load environment variables from a .env file in the project root
require("dotenv").config();

// Initialize the database connection
require("./db/connections");

// Import the `cors` library
const cors = require("cors");

// Import the `express` library
const express = require("express");

// Import the `FILM` model
const FILM = require("./FILM/model");

// Import the `FILMRouter` module
const FILMRouter = require("./FILM/routes");

// Create an instance of the `express` application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Enable parsing of JSON request bodies
app.use(express.json());

// Set the port number for the application
const port = 5001;

// Mount the `FILMRouter` module on the `/` route
app.use(FILMRouter);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
