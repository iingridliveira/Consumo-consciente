import "./Historie.css"
import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import blogFetch from "../axios/config.js";
import { ButtonBack } from "../components/Buttonback/index.jsx";

const Historie1 = () => {
    const params= useParams()
    const [Histories, setHistories] = useState([]);

    const getProducts = async () => {
        try {

            const response= await blogFetch({
                method: 'get',
                url: "/showhistoroie",
                responseType: 'json'

            });
            console.log(response)
            const historiesfilter = response?.data?.histories?.filter((historie)=>{
            return historie.id_Product == params.id_Product
            })
            console.log(historiesfilter)
            setHistories(historiesfilter);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return(

        <div className={"card-historie"}>
            { Histories.length === 0 ? <p>Carregando ...</p> : (
                Histories.map((historie) => (
                    <div className="historie-post" key={historie.id_Product}>
                        <div className={"entyty-historie"}>

                          
                            <img src={historie.Image} alt="Descrição da imagem" />
                            <p><h2>Sobre</h2>{historie.Production_process}</p>
                            <ul >
                                <li>
                                <h4>Origem:⬇️  {historie.origin}</h4>
                                </li>
                                <li >
                                <h4>Vida útil:⬇️ {historie.Lifetime}</h4>
                                </li>
                            </ul>
                            
                            
                            
                        </div>
                     <ButtonBack about={"Inicio"} products={"Produtos"} />
                    </div>)))}

        </div>
    )

}

export default Historie1
