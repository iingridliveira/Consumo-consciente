import './Sobre.css'
import blogFetch from "../axios/config";
import { useState } from "react";


const CreatProduct1 = () => {



  const [name, setName] = useState();
  const [category, setCategory]= useState();

   const creatSobre = async (e)=>{
      e.preventDefault()
       console.log(name,category)
       const product ={name, category}
       const json = JSON.stringify({ answer: product});
       const response = await blogFetch.post("/creatproducts",json
     )
        JSON.parse(response.data.Products);
   }


  return(
     <div className="new-product">
      <h2>Inserir novo Produto :</h2>
       <form onSubmit={(e)=>creatSobre(e)}>
       <div className="form-control">
       <label htmlFor="name">Nome:</label>
       <input
           type="text"
           name="name"
           placeholder="Digite o nome"
           onChange={(e) =>setName(e.target.value)}
           />
  </div>
  <div className="form-control">
       <label htmlFor="category">Categoria:</label>
       <input
           type="text"
           name="category"
           placeholder="Digite a categoria"
           onChange={(e)=>setCategory(e.target.value)}
       />
  </div>
  <input type="submit" value= "criar" className="btn"/>
  </form>
  </div>
  )
  }
  export default CreatProduct1