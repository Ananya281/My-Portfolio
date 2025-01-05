import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Tech } from "./components/Tech";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";
import { StarsCanvas } from "./components/canvas/Stars";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <Tech />
              <Work />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <StarsCanvas />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
