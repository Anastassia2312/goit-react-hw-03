import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
export default function Contact({ info, onDelete }) {
  return (
    <div className={css.wrapper}>
      <p>
        <FaUser />
        {info.name}
      </p>
      <p>
        <FaPhoneAlt />
        {info.number}
      </p>
      <button onClick={() => onDelete(info.id)}>Delete</button>
    </div>
  );
}
