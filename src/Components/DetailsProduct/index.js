import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import FeaturesGrid from "../FeaturesGrid";
import ImgTruck from "../Common/ImgTruck";
import Spinner from "../Common/Spinner";

function DetailsProduct() {
  const param = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProduct() {
    const data = await fetch(
      `https://api.mercadolibre.com/items/${param.product}`
    );
    const dataJson = await data.json();
    setDetails(dataJson);
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="section-product">
          <div className="main-product">
            <div className="content-product">
              <figure className="img-container">
                <img className="img" src={details.pictures[0].url}></img>
              </figure>
            </div>
            <div className="details-product">
              <div className="item-details">
                <span className="item-condition">
                  {details.condition === "new" ? "Nuevo" : ""}
                </span>
                <h1>{details.title}</h1>
                <span className="item-price">${details.price}</span>
                <div className="item-shipping">
                  <figure className="img-shipping">
                    <div className="img-shipping-truck">
                      <ImgTruck />
                    </div>
                  </figure>
                  <p className="item-free_shipping">
                    {details.shipping.free_shipping
                      ? "Envío gratis a todo el país"
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="features-product">
            <h2 className="features-text">
              Características de {details.title}
            </h2>
            <div className="features-grid">
              {details.attributes.slice(0, 12).map((attr, key) => {
                return (
                  <FeaturesGrid
                    name={attr.name}
                    value={attr.value_name}
                    key={key}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default DetailsProduct;
