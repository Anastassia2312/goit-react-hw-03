import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import infoContacts from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(infoContacts);
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contacts) =>
    contacts.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
