import { combineReducers } from "@reduxjs/toolkit";
import { reducerSigns } from "./products/slice";
import { reducerFilters } from "./filters/slice";

export const reducer = combineReducers({
  signs: reducerSigns,
  filters: reducerFilters,
});
