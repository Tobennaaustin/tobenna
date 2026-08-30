import React from "react";
import Home from "../pages/home";
import Work from "../pages/work";
import About from "../pages/about";
import Writing from "../pages/writing";
import Contact from "../pages/contact";

import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function Routess(){
    return(
        <BrowserRouter>
         <Routes>
            <Route index element={<Home/>}/>
            <Route path="/work" element={<Work/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/writing" element={<Writing/>} />
            <Route path="/contact" element={<Contact/>} />
         </Routes>
        </BrowserRouter>
    );
}
