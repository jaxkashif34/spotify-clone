import React, { createContext, useState } from "react";
const songData = {
  currentSongData: {
    album: "Swimming",
    artist: "Mac Miller",
    image: "swimming",
    length: 312,
    title: "So It Goes",
  },
  isLoading: true,
  showMusicBar: true,
};

export const Context = createContext();

export default function AppState({ children }) {
  const [data, setdata] = useState(songData);

  const updateState = (key, value) => {
    setdata({ ...data, [key]: value });
  };
  return (
    <Context.Provider value={{ ...data, updateState }}>
      {children}
    </Context.Provider>
  );
}
