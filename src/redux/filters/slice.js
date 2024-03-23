import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { filters: { sort: "", category: "", keyword: "" } },
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
  },
});

export const reducerFilters = slice.reducer;
export const setFilters = slice.actions.setFilters;
