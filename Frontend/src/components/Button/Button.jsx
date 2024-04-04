import "./Button.css"
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
const Button = ({about, Consume}) => {
    return(
        <div className={"btn"}>
            <ul>
                <li>
                    <Link to={`/creatProduct`}>{about}</Link>
                </li>
                <li>
                    <Link to={`/Consumo`}>{Consume}</Link>
                </li>
            </ul>
        </div>

    )

}
Button.propTypes = {
    about:  PropTypes.string.isRequired,
    Consume: PropTypes.string.isRequired

};



export default Button

