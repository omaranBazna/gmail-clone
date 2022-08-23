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
    CloseSendMessage: (state) => {
      state.sendMessage_isOpen = false;
    },
  },
});

export const mailReducer = mailSlice.reducer;

export const { OpenSendMessage, CloseSendMessage } = mailSlice.actions;
