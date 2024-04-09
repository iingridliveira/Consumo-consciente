import "./Button.css"
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
const Button = ({about, Consume, id}) => {
    return(

            <ul>
                <li>
                    <Link to={`/creatProduct`}>{about}</Link>
                </li>
                <li>
                    <Link to={`/Consumo/${id}`}>{Consume}</Link>

                </li>

            </ul>


    )

}
Button.propTypes = {
    about:  PropTypes.string.isRequired,
    Consume: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired

};



export default Button

