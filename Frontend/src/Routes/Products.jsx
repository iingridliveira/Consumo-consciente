import { useEffect, useState } from "react";

import axios from "axios";

const Product = () => {

    const [Products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            let response;
            response= await axios({
                method: 'get',
                url: "http://localhost:4443/showproducts",
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
                    </div>))}
        </div>
    )

}

export default Product;