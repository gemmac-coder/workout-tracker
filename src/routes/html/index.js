const { Router } = require("express");
const {
  renderStats,
  renderExercises,
} = require("../../controllers/html/index");

const router = Router();

router.get("/stats", renderStats);
router.get("/exercises", renderExercises);

module.exports = router;
