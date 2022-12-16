const fs = require("fs");

const bulkUpdate = (req, res) => {
  const error = req.error;
  const updateData = req.body;
  if (!error) {
    fs.readFile("./database/users.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal error" });
      } else {
        let allUser = JSON.parse(data);
        for (const updateInfo of updateData) {
          const updateIndex = allUser?.findIndex(
            (user) => user.id == updateInfo.id
          );
          const updateDataIndex = updateData?.findIndex(
            (user) => user.id == updateInfo.id
          );
          if (updateIndex > -1) {
            allUser[updateIndex] = {
              ...allUser[updateIndex],
              ...updateData[updateDataIndex],
            };
            fs.writeFile(
              "./database/users.json",
              JSON.stringify(allUser),
              (error) => {
                if (error) {
                  res.status(500).json({ message: "Internal error" });
                } else {
                  res.status(201).json({ message: "Users updated" });
                }
              }
            );
          } else {
            res.status(400).json({ error: "Please provide info" });
          }
          console.log(allUser);
        }
      }
      if (error) {
        res.status(400).json({ error: "Please provide info" });
      }
    });
  }
};

module.exports = bulkUpdate;
