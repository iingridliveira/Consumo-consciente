import { useEffect, useState } from "react";
import { useParams } from "react-router";
import blogFetch from "../axios/config.js";
import { ButtonBack } from "../components/Buttonback/index.jsx";

const Historie1 = () => {
  const params = useParams();
  const [Histories, setHistories] = useState([]);

  const getProducts = async () => {
    try {
      const response = await blogFetch({
        method: "get",
        url: "/showhistoroie",
        responseType: "json",
      });
      const historiesfilter = response?.data?.histories?.filter((historie) => {
        return historie.id_Product == params.id_Product;
      });
      setHistories(historiesfilter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container my-5">
      {Histories.length === 0 ? (
        <p>Carregando ...</p>
      ) : (
        Histories.map((historie) => (
          <div
            className="card mb-4"
            style={{
              backgroundColor: "#f5df24",
              borderRadius: "10px",
              border: "5px solid #fcf8ff",
            }}
            key={historie.id_Product}
          >
            <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
              {/* Imagem */}
              <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                <img
                  src={historie.Image}
                  alt="Descrição da imagem"
                  className="img-fluid"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Informações do Produto */}
              <div
                className="d-flex flex-column ms-4"
                style={{ color: "#1C2662",  fontSize:"30px"}}
              >
                <h1 className="mb-3 text-white">Sobre</h1>
                <p>{historie.Production_process}</p>
                <div className="list-unstyled  text-white">
                  <h4>Origem:⬇️ {historie.origin}</h4>

                  <h4>Vida útil:⬇️ {historie.Lifetime}</h4>
                </div>
              </div>
            </div>

            {/* Botão de Navegação */}
            <div className="card-footer d-flex justify-content-between">
              <ButtonBack about={"Inicio"} products={"Produtos"} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Historie1;
