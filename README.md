# generasi-gigih-homework-Module-2.3

This is a backend server for a Spotify-like application. It provides endpoints to manage playlists and songs.

## Installation

1. Clone the repository:

git clone https://github.com/yudistirarivaldi/generasi-gigih-homework-Module-2.3.git


2. Install the dependencies:

### `npm install`


3. Start the server:

### `npm run dev`

4. Run unit test:

### `npm run test`


The server will start running on `http://localhost:3000`.

## Endpoints

### Get All Playlists

Returns the playlists sorted by play count.

- **URL:** `/playlist`
- **Method:** `GET`
- **Response:** JSON array of playlists

### Play Song

Increments the play count of a song.

- **URL:** `/playlist/:id/play`
- **Method:** `POST`
- **Response:** JSON message

### Add Song

Adds a new song to the playlist.

- **URL:** `/playlist`
- **Method:** `POST`
- **Request Body:** JSON object containing song details (id, artist, title, playCount, image)
- **Response:** JSON message

