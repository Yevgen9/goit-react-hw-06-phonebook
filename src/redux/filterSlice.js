import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "filter",
  storage,
  // whitelist: ["value"],
};

//Генератори екшенів
export const { setFilter } = filterSlice.actions;

// Редюсер слайсу
// export const filterReducer = filterSlice.reducer;

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
