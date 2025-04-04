import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import projectsReducer from "./projectsSlice";
import testimonialsReducer from "./testimonialsSlice";
import authReducer from "./authSlice";
import skillsReducer from "./skillsSlice";

const rootReducer = combineReducers({
  projects: projectsReducer,
  testimonials: testimonialsReducer,
  auth: authReducer,
  skills: skillsReducer, 
});



const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
