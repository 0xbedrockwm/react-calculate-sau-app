import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Bmr from "./Pages/Bmr"
import Bmi from "./Pages/Bmi"
import car from "./Pages/car"
import CardMenu from "./components/CardMenu"




 
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/bmr" element={ <Bmr /> } />
          <Route path="/bmi" element={ <Bmi /> } />
          <Route path="/car" element={ <car /> } />
          <Route path="/cardmenu" element={ <CardMenu /> } />
        </Routes>
      </BrowserRouter>
    </>

  )
}