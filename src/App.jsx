import Home from "./components/Home/Home.jsx";
import Layer from "./components/Layer/Layer.jsx";
import About from "./components/About/About.jsx";
import Halls from "./components/Halls/Halls.jsx";
import OurHalls from "./components/OurHalls/OurHalls.jsx";
import Packages from "./components/Packages/Packages.jsx";
import PhotoHall from "./components/PhotoHall/PhotoHall.jsx";

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
