const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = {
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
};
const workoutSchema = new Schema(schema);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
