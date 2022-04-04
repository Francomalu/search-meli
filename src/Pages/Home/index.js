import React, { useEffect, useState } from "react";
import "./style.scss";
import Item from "../../Components/Item";
import countries from "../../assets/sites.json";

function Home() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    setSites(countries);
  }, []);

  return (
    <div className="background">
      <header>
        <img
          src={
            "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png?v=3.0"
          }
        ></img>
      </header>
      <nav className="navigator">
        {sites.map((item, key) => {
          return (
            <Item key={item.id ? item.id : key} id={item.id} name={item.name} />
          );
        })}
      </nav>
    </div>
  );
}

export default Home;
