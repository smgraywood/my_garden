const express = require("express");
const router = express.Router();
const dataCtrl = require("../../controllers/api/data");

// POST /api/users
router.post("/", dataCtrl.create);

module.exports = router;