import "./Product.css"
import { useEffect, useState } from "react";
import blogFetch from "../axios/config.js";
const Consumption = () => {


    const [Consumptions, setConsumptions] = useState([]);

    const getProducts = async () => {
        try {

            const response= await blogFetch({
                method: 'get',
                url: "/ShowConsumptions",
                responseType: 'json'

            });
            console.log(response)
            setConsumptions(response.data.consunpitions);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    return(

        <div className={"card-consumption"}>
            { Consumptions.length === 0 ? <h1>Carregando ...</h1> : (
                Consumptions.map((consumption) => (
                    <div className="post" key={consumption.id}>
                        <div className={"entyty"}>
                            <h1>{consumption.day}</h1>

                        </div>

                    </div>)))}

        </div>
    )


}
export default Consumption
