// Importing express
const express = require("express");

// Importing the path
const path = require("path");

// Importing the db
const { connect } = require("./db");

// Importing the routes
const routes = require("./routes");

// Declaring the port as 3000
const PORT = process.env.PORT || 3000;

// Declaring app and calling express
const app = express();

// Calling the connect function
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(routes);

// When the app is listening and the server is running it will display the following message
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
