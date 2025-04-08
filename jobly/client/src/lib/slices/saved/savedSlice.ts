import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/lib/types";

const initialState: { saves: Job[] } = {
  saves: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    setSaved: (state, action: PayloadAction<Job[]>) => {
      state.saves = action.payload;
    },
    saveJob: (state, action: PayloadAction<Job>) => {
      state.saves = [...state.saves, action.payload];
    },
    removeSavedJob: (state, action: PayloadAction<Job>) => {
      state.saves = state.saves.filter((save) => save.id !== action.payload.id);
    },
  },
});

export const { setSaved, saveJob, removeSavedJob } = savedSlice.actions;
export default savedSlice.reducer;
