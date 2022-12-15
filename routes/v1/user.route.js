const express = require("express");
const randomUser = require("../../controllers/randomUser.controller");

const router = express.Router();

/**
 * @api {get} /user/random Get Random User
 * @apiDescription Get Random User
 *
 * @apiSuccess {Object[]} random User
 */
router.get("/random", randomUser);

module.exports = router;
