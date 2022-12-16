const fs = require("fs");

const saveUser = (req, res) => {
  const newData = req.body;
  const error = req.error;
  if (error) {
    res.send("error");
  } else {
    fs.readFile("./database/users.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal error" });
      } else {
        const myData = JSON.stringify([...JSON.parse(data), newData]);
        fs.writeFile("./database/users.json", myData, (error) => {
          if (error) {
            res.status(500).json({ message: "Internal error" });
          } else {
            res.status(201).json({ message: "User created" });
          }
        });
      }
    });
  }
};

module.exports = saveUser;
