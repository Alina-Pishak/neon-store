import { createSlice } from "@reduxjs/toolkit";
import { getSignsThunk } from "./thunks";

const slice = createSlice({
  name: "signs",
  initialState: { signs: [] },
  extraReducers: (builder) =>
    builder.addCase(getSignsThunk.fulfilled, (state, { payload }) => {
      state.signs = payload;
    }),
});

export const reducerSigns = slice.reducer;
