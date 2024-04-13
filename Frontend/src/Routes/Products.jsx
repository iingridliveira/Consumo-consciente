import "./Product.css"
import { useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import blogFetch from "../axios/config.js";
import Button from "../components/Button/Button.jsx";
const Product = () => {

    const [Products, setProducts] = useState([]);

    const getProducts = async () => {
        try {

            const response= await blogFetch({
                method: 'get',
                url: "/showproducts",
                responseType: 'json'

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
        
         <div className={"card-product"}>
            { Products.length === 0 ? <h1>Carregando ...</h1> : (
                Products.map((product) => (
                    <div className="post" key={product.id}>
                        <div className={"entyty"}>
                        <h1>{product.name}</h1>
                        <p>{product.category}</p>
        
                        </div>
                        <Button Consume={"Consumo"}id={product.id} Historie={"Saiba mais"}/>
                        <Outlet/>
                    </div>)))}

          </div> 
    )

}
export default Product
