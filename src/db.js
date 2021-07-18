// Importing mongoose
const mongoose = require("mongoose");

// Importing the config file
const { DB_URL, MONGOOSE_OPTIONS } = require("./config");

// Async function for connecting to the mongoose database
const connect = async () => {
  try {
    await mongoose.connect(DB_URL, MONGOOSE_OPTIONS);
    console.log("Successfully connected to mongoDB");
  } catch (error) {
    // Error handling to catch and throw any errors
    throw error;
  }
};

// Async function for connecting from the mongoose database
const disconnect = async () => {
  try {
    await mongoose.connection.close();
    console.log("Successfully disconnected from mongoDB");
  } catch (error) {
    // Error handling to catch and throw any errors
    throw error;
  }
};

// Connect and disconnect functions are exported
module.exports = {
  connect,
  disconnect,
};
