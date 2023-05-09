import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  hideFiles: "false",
  splitView: true,
  network1: 1,
  network2: 1,
};

const slice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.mode = action.payload;
    },
    setHideFiles(state, action) {
      state.hideFiles = action.payload;
    },
    setSplitView(state, action) {
      state.splitView = action.payload;
    },
    setNetwork1(state, action) {
      state.network1 = action.payload;
    },
    setNetwork2(state, action) {
      state.network2 = action.payload;
    },
  },
});

export const {
  setTheme,
  setSplitView,
  setHideFiles,
  setNetwork1,
  setNetwork2,
} = slice.actions;
export const selectTheme = (state) => state.options.mode;
export const selectNetwork1 = (state) => state.options.network1;
export const selectNetwork2 = (state) => state.options.network2;
export const selectHideFiles = (state) => state.options.hideFiles;
export const selectSplitView = (state) => state.options.splitView;

export default slice.reducer;
