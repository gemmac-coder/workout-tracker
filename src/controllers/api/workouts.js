const Workout = require("../../models");

const getWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.aggregate([
      {
        $addFields: {
          duration: {
            $sum: "$exercise.duration",
          },
        },
      },
    ]);
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch workouts" });
  }
};

const addExercise = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const newExercise = await Workout.findByIdAndUpdate(id, {
      $push: {
        exercises: body,
      },
    });
    res.status(200).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: "Could not add exercise" });
  }
};

const createWorkout = async (req, res) => {
  const { body } = req;

  try {
    const newWorkout = await Workout.create({
      body,
    });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Could not add workout" });
  }
};

const getWorkoutsInRange = async (req, res) => {
  //  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
  try {
    const allWorkoutsByRange = await Workout.aggregate([
      {
        $addFields: {
          duration: {
            $sum: "$exercise.duration",
          },
        },
      },
      // This sorts i.e. filters the results - it will only get the 7 most recent exercises (i.e. 7 is the limit)
      //and it gets these in descending order (i.e. that's why the id is -1)
    ])
      .sort({ _id: -1 })
      .limit(7);
    res.status(200).json(allWorkoutsByRange);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch workouts" });
  }
};

module.exports = {
  getWorkouts,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
};
