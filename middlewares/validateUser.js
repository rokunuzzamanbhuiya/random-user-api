const validateUser = (req, res, next) => {
  const { id, gender, name, contact, address, photoUrl } = req.body || {};

  if (id && gender && name && contact && address && photoUrl) {
    next();
  } else {
    if (!id) {
      res.status(406).json({ error: "Please enter user id" });
    }

    if (!gender) {
      res.status(406).json({ error: "Please enter user gender" });
    }

    if (!name) {
      res.status(406).json({ error: "Please enter user name" });
    }

    if (!contact) {
      res.status(406).json({ error: "Please enter user contact" });
    }

    if (!address) {
      res.status(406).json({ error: "Please enter user address" });
    }

    if (!photoUrl) {
      res.status(406).json({ error: "Please enter user photoUrl" });
    }
    req.error = "error";
    next();
  }
};
module.exports = validateUser;
