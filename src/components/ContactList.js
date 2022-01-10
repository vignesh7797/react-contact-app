import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.getContactId(id);
  };

  const renderContacts = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteHandler} id={contact.id}/>;
  });

  return <div className="ui celled list">{renderContacts}</div>;
};

export default ContactList;
