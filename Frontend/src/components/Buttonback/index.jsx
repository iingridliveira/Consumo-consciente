import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ButtonBack = ({ about, products }) => {
  return (
    <ul className="btn-group list-unstyled d-flex" role="group">
      <li className="me-3">
        <Link
          className="btn btn-primary text-white text-decoration-none"
          to={`/creatProduct`}
        >
          {about}
        </Link>
      </li>
      <li className="me-3">
        <Link
          className="btn btn-primary text-white text-decoration-none"
          to={`/product`}
        >
          {products}
        </Link>
      </li>
    </ul>
  );
};
