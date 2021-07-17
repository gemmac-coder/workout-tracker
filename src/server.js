const express = require("express");
const path = require("path");

const { connect } = require("./db");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
