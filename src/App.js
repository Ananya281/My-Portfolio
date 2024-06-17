import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import ParticlesComponent from './components/Particle';
import {NavBar} from './components/NavBar'
import {Banner} from './components/Banner'
import {About} from './components/About'
// import {Skills} from './components/Skills'
import {Tech} from './components/Tech'
import {Contact} from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Work } from './components/Work';
import { StarsCanvas } from './components/canvas/Stars';
// import {Footer} from './components/Footer';


function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <div >
            <NavBar/>
            {/* <ParticlesComponent id="particles"/> */}
            <Banner/>
            <About/>
            {/* <Skills/> */}
            <Tech/>
            <Work/>
          </div>
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div>
          <div>
          {/* <Footer/> */}
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;