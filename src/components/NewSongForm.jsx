import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addSong(title);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="songName">Song name:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="songName"
        type="text"
        required
      />
      <input type="submit" value="Add song" />
    </form>
  );
};

export default NewSongForm;
