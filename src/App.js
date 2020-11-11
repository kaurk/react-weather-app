import React from "react";
import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
    <div className="container">
    
    <Weather defaultCity="Zürich"/>
     <footer>
       This project is coded by Kamaljit Kaur and is {" "}
     <a href="https://github.com/kaurk/react-weather-app" target="_blank" rel="noreferrer"  >
        open sourced on GitHub
       </a>
     </footer>
     </div>
    </div>
  );
}

export default App;
