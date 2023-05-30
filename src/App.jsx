import "./assets/styles/style.css"
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/contato" element={<Contato/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
