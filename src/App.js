import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";

function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
