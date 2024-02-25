import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.liItem} key={contact.id}>
          <Contact info={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
