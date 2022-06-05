module.exports = app => {
    const logs = require("../controllers/main.js");
  
    var router = require("express").Router();

    router.get("/", logs.create);
  
    app.use('/', router);
};