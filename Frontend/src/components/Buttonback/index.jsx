
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ButtonBack = ({about, products}) => {
  return (
    <ul>
           <li>
             <Link to={`/creatProduct`}>{about}</Link>
             </li>
             <li>
                <Link to={`/`}>{products}</Link>
             </li>
    </ul>
  )
}
