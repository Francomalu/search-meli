import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";
import Spinner from "../Common/Spinner";
import "./style.scss";

function ListProducts(props) {
  const { id } = useParams();

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${id}/search?q=televisores&limit=31`
    );
    const dataJson = await data.json();
    setProduct(dataJson.results);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="List">
          <div className="card-container">
            {products
              .filter((e) =>
                e.title.toLowerCase().includes(props.keyword.toLowerCase())
              )
              .map((i, key) => (
                <Product
                  key={key}
                  title={i.title}
                  img={i.thumbnail}
                  id={i.id}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ListProducts;
