import { useEffect, useState } from "react";

import axios from "axios";
import {Link} from "react-router-dom";
import blogFetch from "../axios/config.js";
const Product = () => {

    const [Products, setProducts] = useState([]);

    const getProducts = async () => {
        try {

            const response= await blogFetch({
                method: 'get',
                url: "/showproducts",
                responseType: 'json' // Definindo o responseType como 'json'

            });
            console.log(response)
            setProducts(response.data.Products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    return(
        <div>

            { Products.length === 0 ? <p>Carregando ...< /p> : (
                Products.map((product) =>
                    <div className="post" key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.category}</p>
                        <Link to={`/produtos/${product.id}`} className={"btn"}>ler mais</Link>
                    </div>))}
        </div>
    )

}

export default Product;