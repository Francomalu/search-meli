import React from "react";
import "./style.scss";

function FeaturesGrid(props) {
  return (
    <div className="item-feature">
      <span className="item-feature-name">{props.name}</span>
      <span className="item-feature-value">{props.value}</span>
    </div>
  );
}

export default FeaturesGrid;
