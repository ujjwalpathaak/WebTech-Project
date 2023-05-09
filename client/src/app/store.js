import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../providers/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
