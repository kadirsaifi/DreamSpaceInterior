import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/pages/home/Home";
import About from "./component/pages/about/About";
import Contact from "./component/pages/contact/Contact";
import Kitchen from "./component/pages/service/kitchen/Kitchen";
import LivingRoom from "./component/pages/service/livingroom/Livingroom";
import Bedroom from "./component/pages/service/bedroom/Bedroom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
      </Routes>
    </Router>
    // <div className="App">
    //
    // </div>
  );
}

export default App;
