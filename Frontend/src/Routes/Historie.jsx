import "./Historie.css"
import { useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import blogFetch from "../axios/config.js";
import Navbar from "../components/Header/Navbar.jsx";

const Historie = () => {

    const [Histories, setHistories] = useState([]);

    const getProducts = async () => {
        try {

            const response= await blogFetch({
                method: 'get',
                url: "/showhistoroie",
                responseType: 'json'

            });
            console.log(response)
            setHistories(response.data.histories);
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
                    <div className="historie-post" key={historie.id}>
                        <div className={"entyty-historie"}>
                            <h1>{historie.origin}</h1>
                            <p>{historie.Production_process}</p>

                        </div>
                        <Navbar Products={"Produto"} />

                        <Outlet/>
                    </div>)))}

        </div>
    )

}
export default Historie
