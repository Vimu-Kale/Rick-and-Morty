import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddToFav = createAsyncThunk(
  "favourite/AddToFav",
  async (favID, { getState }) => {
    const state = getState();
    const accessToken = state.user.accessToken;
    const userID = state.user.user._id;
    try {
      const response = await axios.post(
        "https://baroque-fromage-39648.herokuapp.com/api/users/addtofav",
        null,
        {
          params: {
            id: favID,
            _id: userID,
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (e) {
      // console.log(`Error:${e?.response?.data.message}`);
      throw new Error(e?.response?.data.message);
    }
  }
);

export const RemoveFromFav = createAsyncThunk(
  "favourite/RemoveFromFav",
  async (favID, { getState }) => {
    const state = getState();
    const accessToken = state.user.accessToken;
    const userID = state.user.user._id;
    try {
      const response = await axios.delete(
        "https://baroque-fromage-39648.herokuapp.com/api/users/removefromfav",
        {
          params: {
            id: favID,
            _id: userID,
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (e) {
      // console.log(`Error:${e?.response?.data.message}`);
      throw new Error(e?.response?.data.message);
    }
  }
);

export const FetchFav = createAsyncThunk(
  "favourite/FetchFav",
  async (userID, { getState }) => {
    const state = getState();
    const accessToken = state.user.accessToken;

    try {
      const response = await axios.get(
        "https://baroque-fromage-39648.herokuapp.com/api/users/favourites",
        {
          params: {
            _id: userID,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (e) {
      // console.log(`Error:${e?.response?.data.message}`);
      throw new Error(e?.response?.data.message);
    }
  }
);

// ========================================

const initialState = {
  loading: false,
  favouriteCharacters: [],
  isFavourite: true,
};

//=======================================

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    // addToFavourite: (state, action) => {
    //   // console.log(action.payload);
    //   state.favouriteCharacters = [
    //     action.payload,
    //     ...state.favouriteCharacters,
    //   ];
    // },
    resetFav: (state) => initialState,

    removeFromFavourite: (state, action) => {
      // console.log(action.payload, "Removed");
      state.favouriteCharacters = state.favouriteCharacters.filter(
        (character) => character.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchFav.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchFav.fulfilled, (state, action) => {
      state.loading = false;
      // console.log("cin fullfilled");
      // console.log(action);
      state.favouriteCharacters = action.payload.favourites;
    });
    builder.addCase(FetchFav.rejected, (state, action) => {
      state.loading = false;
      state.favouriteCharacters = [];
    });
    // ===================================================================
    builder.addCase(AddToFav.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AddToFav.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(AddToFav.rejected, (state, action) => {
      state.loading = false;
    });
    // ===================================================================
    builder.addCase(RemoveFromFav.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(RemoveFromFav.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(RemoveFromFav.rejected, (state, action) => {
      state.loading = false;
    });

    // ====================================================================
  },
});

export const { removeFromFavourite, resetFav } = favouriteSlice.actions;

export default favouriteSlice.reducer;
