// Importing the path
const path = require("path");

// Render stats function requires the stats html markdown file to be sent
const renderStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

// Render exercises function requires the exercise html markdown file to be sent
const renderExercises = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

// Render home function requires the index html markdown file to be sent
const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

// All functions are exported
module.exports = {
  renderStats,
  renderExercises,
  renderHome,
};
