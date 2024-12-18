import { createSlice } from "@reduxjs/toolkit";

const Slices = createSlice({
  name: "Slice",
  initialState: {
    price: 2999,
    qty: 1,
  },
  reducers: {
    handleIncrement: (state) => {
      state.qty += 1;
    },
    handleDecrement: (state) => {
      if (state.qty > 1) {
        state.qty -= 1;
      }
    },
    resetvalue: (state) => {
      state.price = 2999;
      state.qty = 1;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase((api.loading, (state, action) => {
  // value api reaponse
  //   }))
  // }
});

const Slice = Slices.reducer;
export const { handleDecrement, handleIncrement ,resetvalue } = Slices.actions;
export default Slice;
