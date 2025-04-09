import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/lib/types";

const initialState: { applications: Job[] } = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setApplications: (state, action: PayloadAction<Job[]>) => {
      state.applications = action.payload;
    },
    appendApplication: (state, action: PayloadAction<Job>) => {
      state.applications = [...state.applications, action.payload];
    },
    removeApplication: (state, action: PayloadAction<string>) => {
      state.applications = state.applications.filter(
        (job) => job.id !== action.payload,
      );
    },
  },
});

export const { setApplications, appendApplication, removeApplication } =
  applicationSlice.actions;
export default applicationSlice.reducer;
