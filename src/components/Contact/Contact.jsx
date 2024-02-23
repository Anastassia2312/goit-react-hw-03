import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact({ info }) {
  return (
    <div>
      <p>
        <FaUser />
        {info.contacts.name}
      </p>
      <p>
        <FaPhoneAlt />
        {info.contacts.number}
      </p>
      <button>Delete</button>
    </div>
  );
}
