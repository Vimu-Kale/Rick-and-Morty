import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");

import characterReducer from "../components/CardContainer/characterSlice";
import favouriteReducer from "../components/Favourites/favouriteSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    character: characterReducer,
    favourite: favouriteReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
