const { Router } = require("express");
const {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getWorkouts);
router.put("/workouts/:id", addExercise);
router.post("/workouts", createWorkout);
router.get("/workouts/range", getWorkoutsInRange);

module.exports = router;
