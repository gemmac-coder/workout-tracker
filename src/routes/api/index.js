// Importing the express router as a de-structured object
const { Router } = require("express");

// Importing the necessary functions from the workouts.js file
const {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
} = require("../../controllers/api/workouts");

// Calling the router
const router = Router();

// The api functions and their corresponding paths
router.get("/workouts", getWorkouts);
router.put("/workouts/:id", addExercise);
router.post("/workouts", createWorkout);
router.get("/workouts/range", getWorkoutsInRange);

// Router is exported
module.exports = router;
