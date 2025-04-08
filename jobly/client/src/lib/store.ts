import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/slices/auth/authSlice";
import themeReducer from "@/lib/slices/theme/themeSlice";
import savedReducer from "@/lib/slices/saved/savedSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    saved: savedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
