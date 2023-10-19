import React from "react";
import Weather from "./components/Weather"; // Import the Weather component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        {/* Render the Weather component */}
        <Weather />
      </header>
    </div>
  );
}

export default App;
