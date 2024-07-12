import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <div className="App bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
