const express = require("express");
const router = express.Router();

const {
    getAll,
    getLastMatch,
} = require("../matchController");

router.get(`/get-all`, getAll)
router.get(`/get-last-match`, getLastMatch)

module.exports = router;
