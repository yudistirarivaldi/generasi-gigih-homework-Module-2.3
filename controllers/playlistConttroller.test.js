const playlistController = require("./playlistConttroller");
const playlistModel = require("../models/playlist");

describe("Playlist Controller", () => {
  beforeEach(() => {
    playlistModel.getAll().length = 0; 
    playlistModel.add({
      id: 1,
      artist: "Taylor Swift",
      title: "Midnights",
      playCount: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
    });
  });

  describe("getAllPlaylist", () => {
    it("should return sorted playlist", () => {
      const expectedPlaylist = [
        {
          id: 2,
          artist: "Maliq & D'Essentials",
          title: "Senja Teduh Pelita",
          playCount: 50,
          image:
            "https://i.scdn.co/image/ab67616d0000b273871062e86dc8a76683b66019",
        },
        {
          id: 1,
          artist: "Taylor Swift",
          title: "Midnights",
          playCount: 5,
          image:
            "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
        },
      ];

      const res = {
        json: jest.fn(),
      };

      playlistModel.sortByPlayCount = jest
        .fn()
        .mockReturnValueOnce(expectedPlaylist);

      playlistController.getAllPlaylist({}, res);

      expect(res.json).toHaveBeenCalledWith(expectedPlaylist);
    });
  });

  describe("playSong", () => {
    it("should update play count of a song", () => {
      const songId = 1;
      const expectedPlayCount = 6;

      const res = {
        json: jest.fn(),
      };

      playlistController.playSong({ params: { id: songId } }, res);

      const updatedSong = playlistModel.getById(songId);
      expect(updatedSong.playCount).toBe(expectedPlayCount);
      expect(res.json).toHaveBeenCalledWith({
        message: "Song play count updated.",
      });
    });

    it("should return 404 if song not found", () => {
      const songId = 10;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      playlistController.playSong({ params: { id: songId } }, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Song not found." });
    });
  });

  describe("addSong", () => {
    it("should add a new song to the playlist", () => {
      const newSong = {
        id: 3,
        artist: "Tulus",
        title: "Cahaya",
        playCount: 10,
        image:
          "https://i.scdn.co/image/ab67616d00001e02b55d26c578e30129b0a7e86e",
      };
      const expectedPlaylistLength = 2;

      const res = {
        json: jest.fn(),
      };

      playlistController.addSong({ body: newSong }, res);

      const playlist = playlistModel.getAll();
      expect(playlist.length).toBe(expectedPlaylistLength);
      expect(playlist).toContainEqual(newSong);
      expect(res.json).toHaveBeenCalledWith({
        message: "New song added to playlist.",
        song: newSong,
      });
    });
  });
});
