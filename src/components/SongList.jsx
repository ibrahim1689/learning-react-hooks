import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home" },
    { title: "Memory Gospel" },
    { title: "This Wild Darkness" },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "New Song" }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
