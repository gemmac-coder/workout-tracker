const { Router } = require("express");

const router = Router();

router.get("/stats", renderStats);
router.get("/exercises", renderExercises);

module.exports = router;
