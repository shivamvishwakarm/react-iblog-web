import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Hr from "./components/Hr"
import Home from "./components/Home"
import Contact from "./components/Contact"
import BlogCard from "./components/BlogCard";
import Login from "./components/Login";
import Compose from "./components/Compose";
import Footer from "./components/Footer"








function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Hr></Hr>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/blogs" element={<BlogCard/>}></Route>
      <Route path="/blogs" element={<BlogCard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/create" element={<Compose/>}></Route>
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
