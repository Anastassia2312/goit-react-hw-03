import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import infoContacts from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(infoContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
