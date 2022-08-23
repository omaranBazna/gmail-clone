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
      state.user.userEmail = action.payload.userEmail;
      state.user.userName = action.payload.displayName;
      state.user.userPhoto = action.payload.photoURL;
    },
    logout: (state) => {
      state.user.userEmail = "";
      state.user.userName = "";
      state.user.userPhoto = "";
    },
  },
});

export const userReducer = userSlice.reducer;

export const { login, logout } = userSlice.actions;
