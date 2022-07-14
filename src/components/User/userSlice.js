import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: null,
  accessToken: null,
  registerloading: false,
};
//LOGIN USER
export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (loginDetails) => {
    try {
      const response = await axios.post(
        "https://baroque-fromage-39648.herokuapp.com/api/users/login",
        loginDetails
      );
      return response.data;
    } catch (e) {
      // console.log(`Error:${e?.response?.data.message}`);
      throw new Error(e?.response?.data.message);
    }
  }
);

export const RegisterUser = createAsyncThunk(
  "user/RegisterUser",
  async (userDetails) => {
    console.log("userDetails", userDetails);
    try {
      const response = await axios.post(
        "https://baroque-fromage-39648.herokuapp.com/api/users/signup",
        userDetails
      );
      return response.data;
    } catch (e) {
      // console.log(`Error:${e?.response?.data.message}`);
      throw new Error(e?.response?.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.payload;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.accessToken = null;
    });

    builder.addCase(RegisterUser.pending, (state, action) => {
      state.registerloading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.registerloading = false;
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.registerloading = false;
    });
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
