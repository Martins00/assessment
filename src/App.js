import Home from "./pages/Home";
import Productdetail from "./pages/Productdetail";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";


function App() {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[])
  return (
    <div className="App w-full">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:slug" element={<Productdetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
