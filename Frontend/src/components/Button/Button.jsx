import "./Button.css"
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ Consume, id, Historie}) => {
    return(

            <ul>
             
                <li>
                    <Link to={`/Consumo/${id}`}>{Consume}</Link>

                </li>
                <li>
                    <Link to={`/Historie/${id}`}>{Historie}</Link>
                </li>

            </ul>


    )

}




export default Button

