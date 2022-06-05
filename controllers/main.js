const db = require("../models");
const Log = db.logs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const entry = {
    ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  };

  Log.create(entry)
    .then(data => {
      res.send(`Request Id "${data.id}" was logged to database at ${data.createdAt}. Source IP address: ${data.ipAddress}`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while logging the request."
      });
    });
};




