import {Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return(
        <nav className={"nav-bar"}>
         <h2><Link to={`/`}>Choque Consiente</Link></h2>
            <ul>
                <li>
                    <Link to={`/`}>Sobre</Link>
                </li>
                <li>
                    <Link to={`/Products`}>Produtos</Link>
                </li>
                <li>
                    <Link to={`/Historie`}>Histórico</Link>
                </li>

            </ul>
        </nav>



    )
}
export default Navbar


