// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducer/reducer"

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
})

// You can import these types where needed
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
