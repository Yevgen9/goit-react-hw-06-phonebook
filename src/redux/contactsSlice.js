import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: "1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "2", name: "Hermione Kline", number: "443-89-12" },
    { id: "3", name: "Eden Clements", number: "645-17-79" },
    { id: "4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const { reducer: contactsReducer } = contactsSlice;
