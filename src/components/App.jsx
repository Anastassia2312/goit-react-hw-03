import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import infoContacts from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(infoContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={infoContacts} />
    </div>
  );
}

export default App;
