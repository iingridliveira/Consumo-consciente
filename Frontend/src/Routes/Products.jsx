import {useEffect, /*useState*/} from "react";
import axios from "axios";
const Products = () => {

    /* const [products,setproducts ] = useState([]);*/
     const getproducts = async () => {
        try {

            const  response = await
                axios.get("https://consumo-consciente.onrender.com/showproducts")
            console.log(response)
           const data = response.data
            console.log(data)
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
