import React, { useEffect, useState } from "react";
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
  const [showContent, setShowContent] = useState(false); // State for content visibility
  const [progress, setProgress] = useState(0); // State for loader progress
  const [fadeOut, setFadeOut] = useState(false); // State to trigger loader fade-out

  useEffect(() => {
    // Counter logic for the loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setFadeOut(true); // Trigger fade-out animation
          setTimeout(() => {
            setShowContent(true); // Show website content after loader
          }, 1000); // Wait for fade-out animation
          return prev;
        }
      });
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {!showContent ? (
        // Loader screen with fading animations
        <div className={`loading-page ${fadeOut ? "fade-out" : "fade-in"}`}>
          <div className="counter">
            <h1>{progress}%</h1>
            <hr style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : (
        // Main website content with fade-in animation
        <div className="fade-in-content">
          <NavBar />
          <Banner />
          <About />
          <Tech />
          <Work />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
