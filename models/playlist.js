let playlist = [
  {
    id: 1,
    artist: "Taylor Swift",
    title: "Midnights",
    playCount: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
  },

  {
    id: 2,
    artist: "Maliq & D'Essentials",
    title: "Senja Teduh Pelita",
    playCount: 50,
    image: "https://i.scdn.co/image/ab67616d0000b273871062e86dc8a76683b66019",
  },
  {
    id: 3,
    artist: "Tulus",
    title: "Cahaya",
    playCount: 10,
    image: "https://i.scdn.co/image/ab67616d00001e02b55d26c578e30129b0a7e86e",
  },
  {
    id: 4,
    artist: "Hivi",
    title: "Remaja",
    playCount: 7,
    image: "https://i.scdn.co/image/ab67616d0000b2735aeecbfa393ef13c63e4a310",
  },
  {
    id: 5,
    artist: "The 1975",
    title: "About You",
    playCount: 3,
    image: "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
  },
];

module.exports = {
  getAll: () => {
    return playlist;
  },

  getById: (id) => {
    return playlist.find((song) => song.id === id);
  },

  add: (song) => {
    playlist.push(song);
  },

  updatePlayCount: (id) => {
    const song = playlist.find((item) => item.id === id);
    if (song) {
      song.playCount++;
    }
  },

  sortByPlayCount: () => {
    return playlist.sort((a, b) => b.playCount - a.playCount);
  },
};
