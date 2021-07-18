// Declaring the database name
const DB_NAME = process.env.DB_NAME || "workout_tracker_db";

// Declaring the database URL
const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

// Options for the mongoose database
const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

// Exporting the database URL and mongoose options
module.exports = {
  DB_URL,
  MONGOOSE_OPTIONS,
};
