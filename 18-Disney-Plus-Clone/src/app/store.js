import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/user/useSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
