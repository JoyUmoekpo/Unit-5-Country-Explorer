import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    value: [
        {
            name: {
                common: "Loading...",
            },
        },
    ],
},
})