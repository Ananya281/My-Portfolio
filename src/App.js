import React from "react";
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
    <div className="App">

    <NavBar />
    <Banner />
    <About/>
    <Tech/>
    <Work/>
    <div className='relative z-0'>
    <Contact/>
    <StarsCanvas/>
    </div>
    {/* <World/> */}
  </div>
    
  );
}

export default App;
