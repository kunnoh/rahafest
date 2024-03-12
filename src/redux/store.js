import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "./auth/authReducer";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefMiddleware) =>
    getDefMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
