// The Workout model is imported
const { Workout } = require("../../models");

// Async function gets all workouts and aggregates the totalDuration field
const getWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    // If allWorkouts have been successfully fetched
    res.status(200).json(allWorkouts);
  } catch (error) {
    // Error handling and error message if all workouts could not be fetched
    res.status(500).json({ message: "Could not fetch workouts" });
  }
};

// Async function to add a new exercise
const addExercise = async (req, res) => {
  // Id and body are de-structured from the req.params and req, respectively
  const { id } = req.params;
  const { body } = req;

  // Creating a new exercise using the findByIdAndUpdate method, the id and body from the exercises object are pushed into the array
  try {
    const newExercise = await Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    );
    // If a newExercise has been successfully created
    res.status(200).json(newExercise);
  } catch (error) {
    // Error handling and error message if a new exercise could not be added
    res.status(500).json({ message: "Could not add exercise" });
  }
};

// Async function to create workout
const createWorkout = async (req, res) => {
  try {
    // A new workout is made using the .create method
    const newWorkout = await Workout.create({});
    // If a newWorkout has been successfully created
    res.status(200).json(newWorkout);
  } catch (error) {
    // Error handling and error message if a new workout could not be added
    res.status(500).json({ message: "Could not add workout" });
  }
};

// Async function to get the last 7 workouts and render on the stats section
const getWorkoutsInRange = async (req, res) => {
  try {
    // All workouts for the last 7 days are fetched with the aggregate method
    const allWorkoutsByRange = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
      // The results are sorted in descending order and filtered so only the last 7 workouts are shown
    ])
      .sort({ _id: -1 })
      .limit(7);
    // If all workouts in the range are successfully fetched
    res.status(200).json(allWorkoutsByRange);
  } catch (error) {
    // Error handling and error message if the last 7 workouts could not be fetched
    res.status(500).json({ message: "Could not fetch workouts" });
  }
};

// The functions are exported
module.exports = {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
};
