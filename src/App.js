import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";

import Characters from "./pages/Characters";
import Character from "./pages/Character";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        {/* chemin pour liste comics par character */}
        <Route path="/character/:characterId" element={<Character />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
