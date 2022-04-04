import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import DetailsProduct from "./Components/DetailsProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/carrousel/:id" element={<Search />} />
      <Route
        exact
        path="/carrousel/:id/:product"
        element={<DetailsProduct />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
