import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Main>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
