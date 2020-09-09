import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home" },
    { title: "Memory Gospel" },
    { title: "This Wild Darkness" },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title }]);
  };

  useEffect(() => {
    console.log(
      "Component rendered/re-rendered due to change in `songs`",
      songs
    );
  }, [songs]);

  useEffect(() => {
    console.log("Component rendered/re-rendered due to change in `age`", age);
  }, [age]);

  return (
    <div className="song-list">
      <NewSongForm addSong={addSong} />
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
