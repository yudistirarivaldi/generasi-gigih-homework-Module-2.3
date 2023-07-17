// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
// let playlist = [
//   {
//     id: 1,
//     artist: "Taylor Swift",
//     title: "Midnights",
//     playCount: 5,
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
//   },

//   {
//     id: 2,
//     artist: "Maliq & D'Essentials",
//     title: "Senja Teduh Pelita",
//     playCount: 50,
//     image: "https://i.scdn.co/image/ab67616d0000b273871062e86dc8a76683b66019",
//   },
//   {
//     id: 3,
//     artist: "Tulus",
//     title: "Cahaya",
//     playCount: 10,
//     image: "https://i.scdn.co/image/ab67616d00001e02b55d26c578e30129b0a7e86e",
//   },
//   {
//     id: 4,
//     artist: "Hivi",
//     title: "Remaja",
//     playCount: 7,
//     image: "https://i.scdn.co/image/ab67616d0000b2735aeecbfa393ef13c63e4a310",
//   },
//   {
//     id: 5,
//     artist: "The 1975",
//     title: "About You",
//     playCount: 3,
//     image: "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/playlist", (req, res) => {
//   const sortedPlaylist = playlist.sort((a, b) => b.playCount - a.playCount);
//   res.json(sortedPlaylist);
// });

// app.post("/playlist/:id/play", (req, res) => {
//   const { id } = req.params;
//   const song = playlist.find((item) => item.id === parseInt(id));

//   if (song) {
//     song.playCount++;
//     res.json({ message: "Song play count updated." });
//   } else {
//     res.status(404).json({ messsage: "Song not found." });
//   }
// });

// app.post("/playlist", (req, res) => {
//   const { id, artist, title, playCount, image } = req.body;
//   const newSong = { id, artist, title, playCount, image };

//   playlist.push(newSong);
//   res.json({ message: "New song added to playlist.", song: newSong });
// });

// app.listen(3000, () => {
//   console.log("Spotify server app listening on port 3000");
// });
