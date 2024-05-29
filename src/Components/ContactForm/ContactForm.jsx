import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import s from "./ContactForm.module.scss";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, number } = form;

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;

    // onAdd({ id: nanoid(), name, number });

    // const handleAddContact = (newContact) =>
    //   setContacts(
    //     (contacts) => [...contacts, newContact],
    //     localStorage.setItem("contactsItem", JSON.stringify(contacts))
    //   );

    // const handleCheckContact = (name) => {
    //   const isExistContact = !!contacts.find((contact) => contact.name === name);

    resetForm();
  };

  const validateForm = () => {
    const { name, number } = form;
    if (!name || !number) {
      alert("Some filed is empty");
      return false;
    }
    // return onCheck(name);
  };

  const resetForm = () => setForm(INITIAL_STATE);

  const { name, number } = form;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <div>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <p className={s.text}>Name</p>
        <input
          id={nameInputId}
          type="text"
          name="name"
          placeholder="Enter text"
          value={name}
          onChange={handleChangeForm}
        />

        <p className={s.text}>Number</p>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeForm}
        />

        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}