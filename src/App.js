import React from "react";
import Slide from "./Components/Slide";
import catGlasses from "./img/cat-glasses.jpg";
import catButterfly from "./img/cat-butterfly.jpg";
import catGreen from "./img/cat-green.jpg";
import "./App.css";

const App = () => {
  const slides = [
    {
      id: "slide1",
      image: catGlasses,
    },
    {
      id: "slide2",
      image: catButterfly,
    },
    {
      id: "slide3",
      image: catGreen,
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
