import {Link} from "react-router-dom";
import './Navbar.css'
import PropTypes from 'prop-types';
const Navbar = ({title,about,Products,Historie,Consume}) => {
    return(
        <nav className={"nav-bar"}>
         <h2><Link to={`/`}>{title}</Link></h2>
            <ul>
                <li>
                    <Link to={`/`}>{about}</Link>
                </li>
                <li>
                    <Link to={`/Products`}>{Products}</Link>
                </li>
                <li>
                    <Link to={`/Historie`}>{Historie}</Link>
                </li>


                <li>
                    <Link to={`/Consumo`}>{Consume}</Link>
                </li>
            </ul>
        </nav>

    )

}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  Products: PropTypes.string.isRequired,
  Historie: PropTypes.string.isRequired,
    Consume: PropTypes.string.isRequired,
};


  
export default Navbar


