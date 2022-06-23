import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  characters: [],
  error: "",
  filterObj: {
    page: 1,
    name: "",
    gender: "",
    status: "",
    species: "",
    type: "",
  },
};

//Generates Pending, Fulfilled and Rejected action types
export const fetchCharacters = createAsyncThunk(
  "character/fetchUsers",
  async (arg, { getState }) => {
    const state = getState();
    // console.log("state", state);
    const filterObj = state.character.filterObj;
    // console.log("filterObj", filterObj);
    // console.log("fetchCharacter");
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character",
      { params: filterObj }
    );
    return response.data;
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      // console.log("in set filter");
      state.filterObj = {
        ...state.filterObj,
        ...action.payload,
      };
    },
    setPage: (state, action) => {
      state.filterObj = {
        ...state.filterObj,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      // console.log("payload", action.payload);
      state.loading = false;
      state.characters = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      if (action.error.message === "Request failed with status code 404") {
        state.error = "Character Not Found!";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export const { setFilter, setPage } = characterSlice.actions;

export default characterSlice.reducer;
