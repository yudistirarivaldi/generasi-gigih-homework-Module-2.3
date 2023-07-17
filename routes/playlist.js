const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistConttroller");

router.get("/", playlistController.getAllPlaylist);
router.post("/:id/play", playlistController.playSong);
router.post("/", playlistController.addSong);

module.exports = router;
