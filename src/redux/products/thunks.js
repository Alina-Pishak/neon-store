import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSigns } from "../../api/signs";

export const getSignsThunk = createAsyncThunk("signs/getAll", () => getSigns());
