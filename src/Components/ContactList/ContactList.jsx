import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeContact } from "../../redux/contactsSlice";
import s from "./ContactList.module.scss";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <p className={s.textName}> {contact.name}:</p>
            <p className={s.textNumber}>{contact.number}</p>
            <button
              onClick={() => dispatch(removeContact(contact.id))}
              className={s.btnDel}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
