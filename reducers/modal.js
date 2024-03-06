import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: null,
    description: null,
    imagesUrl: null,
    link: null,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addDataToModal: (state, action) => {
      state.value.username = action.payload.username;
    },
  },
});

export const { addDataToModal } = modalSlice.actions;
export default modalSlice.reducer;
