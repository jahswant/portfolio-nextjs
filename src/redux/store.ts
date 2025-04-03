import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import projectsReducer from "./projectsSlice";
import testimonialsReducer from ".//testimonialsSlice";
import authReducer from ".//authSlice"; // optionnel si tu l'as

// Création du store global
export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    testimonials: testimonialsReducer,
    auth: authReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
