"use client";
import { songs, TMusicDetails } from "@/data/songs";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICounterState {
  songs: TMusicDetails[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  isRepeating: boolean;
  isShuffling: boolean;
  activeSong: TMusicDetails;
  songDuration: number | null;
  currentTime: number | null;
}

const initialState: ICounterState = {
  songs,
  currentIndex: 0,
  isActive: false,
  isShuffling: false,
  isRepeating: false,
  isPlaying: false,
  activeSong: songs[0],
  songDuration: null,
  currentTime: null,
};

export const musicSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setShuffling: (state, action: PayloadAction<boolean>) => {
      state.isShuffling = action.payload;
      state.isRepeating = false;
    },
    setRepeating: (state, action: PayloadAction<boolean>) => {
      state.isRepeating = action.payload;
      state.isShuffling = false;
    },
    playNextSong: (state) => {
      if (state.activeSong.id + 1 >= songs.length) {
        
        state.activeSong = songs[0];
      } else {
        state.activeSong = songs[state.activeSong.id+1];
      }
    },
    playPrevSong: (state) => {
      if (state.activeSong.id === 0) state.activeSong = songs[songs.length-1];
      else state.activeSong = songs[state.activeSong.id - 1];
    },
    setSongDuration: (state, action: PayloadAction<number>) => {
      state.songDuration = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveSong,
  setPlaying,
  setRepeating,
  setShuffling,
  playNextSong,
  playPrevSong,
  setSongDuration,
  setCurrentTime,
} = musicSlice.actions;

export default musicSlice.reducer;
