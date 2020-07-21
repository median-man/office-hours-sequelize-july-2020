const db = require("../models");

module.exports = (app) => {

  app.get("/api/departments", (req, res) => {
    console.log("req.query", req.query);
    const query = {};
    query.include = [db.Item];
    query.where = req.query;
    db.Department.findAll(query).then((dbDepts) => res.json(dbDepts));
  });

  app.post("/api/departments", (req, res) => {
    db.Department.create(req.body).then((newDept) => {
      res.json(newDept);
    });
  });

  app.get("/api/items", (req, res) => {
    db.Item.findAll({}).then((dbDepts) => res.json(dbDepts));
  });

  app.post("/api/items", (req, res) => {
    db.Item.create(req.body).then((newDept) => {
      res.json(newDept);
    });
  });
};
