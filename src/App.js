import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
import { addContact, removeContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filterSlice";
import "./App.module.scss";

export default function App() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleCheckContact = (name) => {
    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact && alert(`${name} is already exist`);

    return !isExistContact;
  };

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const getVisibleContacts = () => {
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} onCheck={handleCheckContact} />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      {/* <Filter filter={filter} onChange={handleFilterChange} /> */}
      <ContactsList contacts={visibleContacts} onRemove={handleRemoveContact} />
    </>
  );
}
