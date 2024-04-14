/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = ({logo,title,Products,Historie}) => {
    return(
        <nav className={"nav-bar"}>
        <div className="logo">
         <img src={logo} alt="Descrição da imagem" />
         <h2>{title}</h2>
         </div>
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


