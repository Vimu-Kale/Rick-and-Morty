import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// const reduxLogger = require("redux-logger");

import characterReducer from "../components/CardContainer/characterSlice";
import favouriteReducer from "../components/Favourites/favouriteSlice";
import appbarReducer from "../components/ResponsiveAppBar/appbarSlice";
import userReducer from "../components/User/userSlice";

// const logger = reduxLogger.createLogger();

const rootReducer = combineReducers({
  character: characterReducer,
  favourite: favouriteReducer,
  appbar: appbarReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "appbar"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
