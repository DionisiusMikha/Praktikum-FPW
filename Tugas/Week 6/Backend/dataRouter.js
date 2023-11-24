const express = require("express");
const router = express.Router();

const {
    showAllData,
    registerUser,
    loginUser,
    getStory,
    getUserData,
    getStoryId,
    addStory,
    updateThumb,
    updateJudul,
    deleteStory
} = require("./dataController");

router.get("/show-all-data", showAllData);
router.get("/get-story", getStory);
router.get("/get-story-id", getStoryId);
router.get("/get-user", getUserData);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/add-story", addStory);
router.put("/update-thumb", updateThumb);
router.put("/update-judul", updateJudul);
router.delete("/delete-story", deleteStory);

module.exports = router;
