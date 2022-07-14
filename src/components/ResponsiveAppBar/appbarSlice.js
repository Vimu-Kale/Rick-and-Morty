import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navuser: "character",
};

const appbarSlice = createSlice({
  name: "appbar",
  initialState,
  reducers: {
    changeNavUser: (state, action) => {
      state.navuser = action.payload;
    },
    resetNav: (state) => initialState,
  },
});

export const { changeNavUser, resetNav } = appbarSlice.actions;
export default appbarSlice.reducer;
