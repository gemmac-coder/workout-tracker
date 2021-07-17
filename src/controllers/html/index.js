const path = require("path");

const renderStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

const renderExercises = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

module.exports = {
  renderStats,
  renderExercises,
  renderHome,
};
