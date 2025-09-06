import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/pages/home/Home";
import About from "./component/pages/about/About";
import Contact from "./component/pages/contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // <div className="App">
    //
    // </div>
  );
}

export default App;
