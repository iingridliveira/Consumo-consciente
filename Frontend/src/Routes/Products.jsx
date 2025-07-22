import "./Product.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import blogFetch from "../axios/config.js";
import Button from "../components/Button/Button.jsx";
import Loading from "../components/Loading/index.jsx";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await blogFetch({
        method: "get",
        url: "/showproducts",
        responseType: "json",
      });
      console.log(response);
      setProducts(response.data.Products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-4">
      {products.length === 0 ? (
      <Loading/>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
              <div
                className="card h-100"
                style={{ backgroundColor: "#FFD700", borderRadius: "10px" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.category}</p>
                </div>
                <div className="card-footer text-center">
                  <Button
                    Consume={"Consumo"}
                    id={product.id}
                    Historie={"Saiba mais"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Product;
