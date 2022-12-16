const fs = require("fs");

const uniqueIdValidation = (req, res, next) => {
  const { id } = req.body;
  fs.readFile("./database/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal error" });
      next();
    } else {
      const myData = JSON.parse(data);
      const checkID = myData?.filter((data) => data.id == id);
      if (checkID.length !== 0) {
        res.status(400).json({ error: "User id already exists" });
        req.error = "error";
        next();
      } else {
        next();
      }
    }
  });
};

module.exports = uniqueIdValidation;
