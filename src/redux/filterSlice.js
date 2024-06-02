import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",

  reducers: {
    setFilter: (state, action) => {
      //   console.log("setFilter action >> ", action);

      return action.payload;
    },
  },
});

//Генератори екшенів
export const { setFilter } = filterSlice.actions;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
