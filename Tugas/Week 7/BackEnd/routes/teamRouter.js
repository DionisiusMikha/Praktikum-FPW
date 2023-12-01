const express = require("express");
const router = express.Router();

const {
    getAll,
    getTeamById,
    getTop3,
} = require("../teamController");

router.get(`/get-all`, getAll)
router.get(`/get-team-by-id`, getTeamById)
router.get(`/get-top-3`, getTop3)


module.exports = router;
