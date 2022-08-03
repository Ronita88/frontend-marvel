import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
// import Comics from "./pages/Comics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/comics" element={<Comics />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
