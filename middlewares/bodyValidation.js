const fs = require("fs");

const bodyValidation = (req, res, next) => {
  const userData = req.body;

  if (userData.length === 0 || !userData) {
    req.error = "error";
    console.log("error");
    res.status(400).json({ error: "Please provide user info" });
    next();
  }

  userData?.map((user) => {
    if (!user.id) {
      req.error = "error";
      res.status(400).json({ error: "Please provide user id" });
      next();
    }

    if (
      !user.gender &&
      !user.name &&
      !user.contact &&
      !user.address &&
      !user.photoUrl
    ) {
      req.error = "error";
      res.status(400).json({ error: "Please provide user information" });
      next();
    }
  });

  if (!req.error) {
    next();
  }
};

module.exports = bodyValidation;
