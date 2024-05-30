
import React, { useState } from "react";
import { nanoid } from "nanoid";

import s from "./ContactForm.module.scss";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd, onCheck }) {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, number } = form;

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, number });

    resetForm();
  };

  const validateForm = () => {
    const { name, number } = form;
    if (!name || !number) {
      alert("Some field is empty");
      return false;
    }
    return onCheck(name);
  };

  const resetForm = () => setForm(INITIAL_STATE);

  const { name, number } = form;

  return (
    <div>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <p className={s.text}>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
        />

        <p className={s.text}>Number</p>
        <input
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
