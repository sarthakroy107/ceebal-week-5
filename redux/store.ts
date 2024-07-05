'use client';
import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./player-slice";

export const store = () =>
  configureStore({
    reducer: {
      music: musicReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
