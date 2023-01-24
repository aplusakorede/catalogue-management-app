import React, { useState, useEffect } from "react";
import "./styles.css";
import NavBar from "./components/navBar";
import Cards from "./components/Card";

export default function App() {
  let [translation, setTranslation] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      // call API with props.greeting parameter
      .then((json) => setTranslation(json));
  }, [setTranslation]);

  return (
    <div className="App">
      <NavBar />

      {[...translation].map((product) => (
        <Cards
          image={product.image}
          title={product.title}
          text={product.description}
        />
      ))}
    </div>
  );
}
