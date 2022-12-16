const express = require("express");
const randomUser = require("../../controllers/randomUser.controller");
const allUser = require("../../controllers/allUser.controller");
const saveUser = require("../../controllers/saveUser");
const uniqueIdValidation = require("../../middlewares/uniqueIdValidation");
const validateUser = require("../../middlewares/validateUser");
const updateOneUser = require("../../controllers/updateOneUser");
const validateUserId = require("../../middlewares/validateUserId");

const router = express.Router();

/**
 * @api {get} /user/random Get Random User
 * @apiDescription Get Random User
 *
 * @apiSuccess {Object[]} random User
 */
router.get("/random", randomUser);

/**
 * @api {get} /user/all All User
 * @apiDescription Get all User
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} All User.
 */
router.get("/all", allUser);

/**
 * @api {post} /user/save Create a new user
 * @apiDescription Create new user
 *
 * @apiSuccess new user created.
 */
router.post("/save", validateUser, uniqueIdValidation, saveUser);

/**
 * @api {patch} /user/update/:id update one user info
 * @apiDescription update one user info
 *
 * @apiSuccess update one user info.
 */
router.patch("/update/:id", validateUserId, updateOneUser);

module.exports = router;
