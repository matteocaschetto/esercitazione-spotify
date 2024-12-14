import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    }
  }
});

export const { setCurrentSong } = songSlice.actions;

export default songSlice.reducer;
