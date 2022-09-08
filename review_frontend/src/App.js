import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Candidate from "./Candidate";
import CreateCandidate from "./CreateCandidate";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate/:email" element={<Candidate />} />
          <Route path="/create-candidate/" element={<CreateCandidate />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
