import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
