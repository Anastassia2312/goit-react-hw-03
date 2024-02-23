import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact({ info }) {
  return (
    <div>
      <p>
        <FaUser />
        {info.name}
      </p>
      <p>
        <FaPhoneAlt />
        {info.number}
      </p>
      <button>Delete</button>
    </div>
  );
}
