import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessage_isOpen: false,
};
export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    OpenSendMessage: (state) => {
      state.sendMessage_isOpen = true;
    },
  },
});

export const mailReducer = mailSlice.reducer;
export const { OpenSendMessage } = mailSlice.actions;
