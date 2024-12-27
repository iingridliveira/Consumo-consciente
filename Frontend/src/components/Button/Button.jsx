import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ Consume, id, Historie }) => {
  return (
    <ul className="button-list  text-white">
      <li>
        <Link to={`/Consumo/${id}`} className="button  text-white">
      <li></li>
          {Consume}
        </Link>
      </li>
      <li>
        <Link to={`/Historie/${id}`} className="button  text-white">
      <li></li>
          {Historie}
        </Link>
      </li>
    </ul>
  );
};

export default Button;
