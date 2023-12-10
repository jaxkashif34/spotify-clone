import React, { createContext, useState } from 'react';
const songData = {
  currentSongData: {
    album: 'Swimming',
    artist: 'Mac Miller',
    image: 'swimming',
    length: 312,
    title: 'So It Goes',
  },
  isLoading: true,
  showMusicBar: true,
};

export const Context = createContext();

export default function AppState({ children }) {
  const [data, setData] = useState(songData);

  const updateState = (key, value) => {
    setData({ ...data, [key]: value });
  };
  return <Context.Provider value={{ ...data, updateState }}>{children}</Context.Provider>;
}
