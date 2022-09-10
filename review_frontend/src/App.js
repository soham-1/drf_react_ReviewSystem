import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Candidate from "./components/Candidate";
import CreateCandidate from "./components/CreateCandidate";
import Register from "./components/Register";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidate/:email" element={<Candidate />} />
          <Route path="/create-candidate/" element={<CreateCandidate />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
