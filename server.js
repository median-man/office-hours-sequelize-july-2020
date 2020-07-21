const express = require("express");
const apiRoutes = require("./routes/api-routes");

// Requiring our models for syncing
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));

// Routes
apiRoutes(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${ PORT}`);
  });
});
