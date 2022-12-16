const fs = require("fs");

const validateUserId = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    req.error = "error";
    res.status(400).json({ error: "Please provide valide user id" });
    next();
  }

  if (!id) {
    req.error = "error";
    res.status(400).json({ error: "Please provide user id" });
    next();
  }

  if (id && !isNaN(id)) {
    fs.readFile("./database/users.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        req.error = "error";
        res.status(500).json({ error: "Internal error" });
        next();
      } else {
        const myData = JSON.parse(data);
        const findUser = myData.find((user) => user.id == id);
        if (!findUser) {
          req.error = "error";
          res.status(404).json({ error: "User not found" });
          next();
        } else {
          req.user = findUser;
          next();
        }
      }
    });
  }
};

module.exports = validateUserId;
