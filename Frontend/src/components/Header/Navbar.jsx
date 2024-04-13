/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = ({title,Products,Historie}) => {
    return(
        <nav className={"nav-bar"}>
         <h2>{title}</h2>
            <ul>

                <li>
                    <Link to={`/`}>{Products}</Link>
                </li>
                <li>
                    <Link to={`/Historie/:id_Product`}>{Historie}</Link>
                </li>

            </ul>
        </nav>

    )

}



  
export default Navbar


