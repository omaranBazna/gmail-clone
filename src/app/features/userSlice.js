import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
  userPhoto: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.displayName;
      state.userPhoto = action.payload.photoURL;
    },
    logout: (state) => {
      state.userEmail = "";
      state.userName = "";
      state.userPhoto = "";
    },
  },
});

export const userReducer = userSlice.reducer;

export const { login, logout } = userSlice.actions;
