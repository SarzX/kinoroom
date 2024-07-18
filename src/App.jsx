import Home from "./components/Home/Home.jsx";
import Layer from "./components/Layer/Layer.jsx";
import About from "./components/About/About.jsx";
import Halls from "./components/Halls/Halls.jsx";
import OurHalls from "./components/OurHalls/OurHalls.jsx";
import Packages from "./components/Packages/Packages.jsx";
import PhotoHall from "./components/PhotoHall/PhotoHall.jsx";
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <MyComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;

function App() {

  return (
    <Layer>
        <Home/>
        <About/>
        <Halls/>
        <OurHalls/>
        <Packages/>
        <PhotoHall/>
    </Layer>
  )
}

export default App
