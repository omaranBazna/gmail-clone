import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessage_isOpen: false,
  selectedMail: null,
};
export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    OpenSendMessage: (state) => {
      state.sendMessage_isOpen = true;
    },
    CloseSendMessage: (state) => {
      state.sendMessage_isOpen = false;
    },
  },
});

export const mailReducer = mailSlice.reducer;

export const { OpenSendMessage, CloseSendMessage, selectMail } =
  mailSlice.actions;
