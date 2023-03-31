// Import the Mongoose library
const mongoose = require("mongoose");

// Define an asynchronous function to connect to a database
const connectToDatabase = async () => {
  try {
    // Use the Mongoose `connect` method to connect to the database using the value of the `MONGO_URI` environment variable
    await mongoose.connect(process.env.MONGO_URI);

    // Log a message to indicate that the connection was successful
    console.log("Connected to the database");
  } catch (error) {
    // Log any errors that occur during the connection process
    console.log(error);
  }
};

// Call the `connectToDatabase` function to initiate the connection
connectToDatabase();
