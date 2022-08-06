import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";

import Character from "./pages/Character";

// import CharacterId from "./pages/CharacterId";

//import components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        {/* chemin pour liste comics par character */}
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
