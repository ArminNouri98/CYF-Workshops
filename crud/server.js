const express = require("express");
const albumsData = require("./albums.json");
const path = require("path");
const app = express();
app.get("/albums", (req, res) => {
  res.sendFile(path.join(__dirname, "albums.json"));
  // res.send("./albums.json");
});
app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  res.send(albumsData.find((album) => album.albumId == albumId));
});
app.post("/albums", (req, res) => {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
