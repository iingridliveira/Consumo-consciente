import {useEffect, useState} from "react";
import axios from "axios";
const Products = () => {

     const [products,setproducts ] = useState([]);
     const getproducts = async () => {
        try {

            const  response = await
                axios.get("http://consumo-consciente.onrender.com/showproducts")

           const data = response.data
            console.log(response)
        }
        catch (error){
         console.log(error)

        }
     }
    useEffect(() => {
      getproducts();
    }, []);
    return (

        <div>Produtos</div>
    )
}
export default Products