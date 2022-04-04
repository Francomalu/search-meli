import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

function Product(props) {
  const site = useParams();
  return (
    <Link className="card-link" to={`/carrousel/${site.id}/${props.id}`}>
      <div className="card">
        <img className="card-img" src={props.img}></img>
        <p className="card-title">{props.title}</p>
      </div>
    </Link>
  );
}

export default Product;
