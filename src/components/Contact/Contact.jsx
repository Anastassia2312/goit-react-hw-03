import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
export default function Contact({ info, onDelete }) {
  return (
    <div className={css.box}>
      <p className={css.string}>
        <FaUser />
        {info.name}
      </p>
      <p className={css.string}>
        <FaPhoneAlt />
        {info.number}
      </p>
      <button onClick={() => onDelete(info.id)}>Delete</button>
    </div>
  );
}
