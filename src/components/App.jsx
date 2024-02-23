import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import infoContacts from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(infoContacts);
  const [filter, setFilter] = useState("");
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
