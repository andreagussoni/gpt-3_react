import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  WhatGPT3,
  Possibility,
} from "./containers";
import { Cta, Brand, Article, Feature, Navbar } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
