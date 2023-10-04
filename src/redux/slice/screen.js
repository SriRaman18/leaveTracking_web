import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customersData: [],
  header: [],
  rows: [],
  snackBarOpen: false,
};
const screenSlice = createSlice({
    name: "screens",
    initialState,
    reducers: {
      setCustomersData: (state, { payload }) => {
        state.customersData = payload;
      },
      setHeader: (state, { payload }) => {
        state.header = payload;
      },
      setRows: (state, { payload }) => {
        state.rows = payload;
      },
      setSnackBarOpen: (state, { payload }) => {
        state.snackBarOpen = payload;
      },
    },
  });
  
  export const { setCustomersData, setHeader, setRows, setSnackBarOpen } =
    screenSlice.actions;
  
  export default screenSlice.reducer;
  