const express = require("express");
const router = express.Router();

const {
    getAll,
    getTop3,
} = require("../playerController");

router.get(`/get-all`, getAll)
router.get(`/get-top-3`, getTop3)

module.exports = router;
