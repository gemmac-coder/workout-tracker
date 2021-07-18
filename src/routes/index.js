// Importing the express router as a de-structured object
const { Router } = require("express");

// Importing the api folder
const api = require("./api");

// Importing the html folder
const html = require("./html");

// Calling the router
const router = Router();

// All api routes will use the /api prefix and the api controllers
router.use("/api", api);

//  The html routes will use the / prefix and the html controllers
router.use("/", html);

// The router is exported
module.exports = router;
