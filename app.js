const express = require("express");
const app = express();
const playlistRoutes = require("./routes/playlist");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/playlist", playlistRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Spotify server app listening on port 3000");
});
