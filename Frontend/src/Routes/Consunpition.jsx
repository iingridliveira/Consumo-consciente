import "./Product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import blogFetch from "../axios/config.js";
import Loading from "../components/Loading/index.jsx";

const Consumption = () => {
  const params = useParams();

  const [Consumptions, setConsumptions] = useState([]);

  const getProducts = async () => {
    try {
      const response = await blogFetch({
        method: "get",
        url: "/ShowConsumptions",
        responseType: "json",
      });

      const consumptionsFilter = response?.data?.consunpitions?.filter(
        (consumption) => consumption.id_Product == params.id_Product
      );

      setConsumptions(consumptionsFilter);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-5">
      {Consumptions.length === 0 ? (
        <Loading/>
      ) : (
        <div className="row">
          {Consumptions.map((consumption) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={consumption.id_Product}
            >
              <div className="card  bg-warning shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Em {consumption.days} dias
                  </h5>
                  <p className="card-text">
                    Medidos em {consumption.Measurement}, com uma potência de{" "}
                    {consumption.power} Watts.
                  </p>
                  <p className="card-text">
                    Em {consumption.duration} hora(s), totalizando{" "}
                    <strong>{consumption.resultConsumption} kW/h</strong>.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Consumption;
