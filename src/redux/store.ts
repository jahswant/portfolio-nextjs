// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // ← utilise localStorage
import { combineReducers } from "redux";

import projectsReducer from "./projectsSlice";
import testimonialsReducer from "./testimonialsSlice";
import authReducer from "./authSlice";

// Combine les reducers
const rootReducer = combineReducers({
  projects: projectsReducer,
  testimonials: testimonialsReducer,
  auth: authReducer,
});

// Configuration de persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persistant
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // requis pour redux-persist
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
