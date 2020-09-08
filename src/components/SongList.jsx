import React, { useState } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home" },
    { title: "Memory Gospel" },
    { title: "This Wild Darkness" },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title }]);
  };

  return (
    <div className="song-list">
      <NewSongForm addSong={addSong} />
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
