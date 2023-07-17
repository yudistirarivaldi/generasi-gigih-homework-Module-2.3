const playlistModel = require("../models/playlist");

module.exports = {
  getAllPlaylist: (req, res) => {
    const sortedPlaylist = playlistModel.sortByPlayCount();
    res.json(sortedPlaylist);
  },

  playSong: (req, res) => {
    const { id } = req.params;
    const song = playlistModel.getById(parseInt(id));

    if (song) {
      playlistModel.updatePlayCount(song.id);
      res.json({ message: "Song play count updated." });
    } else {
      res.status(404).json({ message: "Song not found." });
    }
  },

  addSong: (req, res) => {
    const { id, artist, title, playCount, image } = req.body;
    const newSong = { id, artist, title, playCount, image };

    playlistModel.add(newSong);
    res.json({ message: "New song added to playlist.", song: newSong });
  },
};
