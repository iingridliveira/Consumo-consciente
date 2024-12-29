import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ Consume, id, Historie }) => {
  return (
    <ul
      className="btn-group list-unstyled d-flex align-items-center gap-3"
      role="group"
    >
      <li>
        <Link
          to={`/Consumo/${id}`}
          className="btn btn-primary text-white text-decoration-none"
        >
          {Consume}
        </Link>
      </li>
      <li>
        <Link
          to={`/Historie/${id}`}
          className="btn btn-primary text-white text-decoration-none"
        >
          {Historie}
        </Link>
      </li>
    </ul>
  );
};

export default Button;
