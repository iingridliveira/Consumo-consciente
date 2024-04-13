import "./Product.css"
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import blogFetch from "../axios/config.js";
const Consumption = () => {

    const params= useParams()

    const [Consunptions, setConsumptions] = useState([]);

    const getProducts = async () => {
        try {

            const response= await blogFetch({
                method: 'get',
                url: "/ShowConsumptions",
                responseType: 'json'

            });
         
            console.log(response)
         
                const consunpitionsfilter =  response?.data?.consunpitions?.filter((consumption)=>{
                return consumption.id_Product == params.id_Product
                })
            
            console.log(consunpitionsfilter)
            setConsumptions(consunpitionsfilter);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getProducts();
    },[]);
    return(

        <div className={"card-consumption"}>
            { Consunptions.length === 0 ? <h1>Carregando ...</h1> : (
                Consunptions.map((consumption) => (
                    <div className="post" key={consumption.id_Product}>
                        <div className={"entyty"}>
                            <h1>{consumption.days} dias</h1>
                            <p>{consumption.Measurement}</p>
                            <p>{consumption.power}</p>
                            <p>{consumption.duration}</p>


                            <h1></h1>

                        </div>

                    </div>)))}

        </div>
    )


}
export default Consumption
