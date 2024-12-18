import { configureStore } from "@reduxjs/toolkit";
import Slice from "../toolkit/slice";

const store = configureStore({
  reducer: {
    slice : Slice
  },
});

export default store;
