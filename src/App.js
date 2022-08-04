import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import ComicId from "./pages/ComicId";
import Characters from "./pages/Characters";
import CharacterId from "./pages/CharacterId";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterId />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:id" element={<ComicId />} />
      </Routes>
    </Router>
  );
}

export default App;
