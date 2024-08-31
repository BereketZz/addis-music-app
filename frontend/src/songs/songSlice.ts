import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CreateSong,
  initialState,
  Song,
  SongStatistics,
} from "../interfaces/interface";

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsRequest(state) {
      state.loading = true;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchStatisticsRequest(state) {
      state.loading = true;
    },
    fetchStatisticsSuccess(state, action: PayloadAction<SongStatistics>) {
      state.statistics = action.payload;
      state.loading = false;
    },

    createSongRequest(state, _action: PayloadAction<CreateSong>) {
      state.loading = true;
    },
    createSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    deleteSongRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },

    updateSongRequest(state, _action: PayloadAction<Song>) {
      state.loading = true;
    },

    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload; 
      }
      state.loading = false;
    },
   
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchStatisticsRequest,
  fetchStatisticsSuccess,

  createSongRequest,
  createSongSuccess,
  updateSongRequest,
  updateSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
} = songSlice.actions;

export default songSlice.reducer;
