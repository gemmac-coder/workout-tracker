// Importing Mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Declaring schema, the fields present, and their data types
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

// Workout schema is a new instance of the schema class
const workoutSchema = new Schema(schema);

// A Workout takes in the workout model and the schema
const Workout = mongoose.model("Workout", workoutSchema);

// The Workout model is exported
module.exports = Workout;
