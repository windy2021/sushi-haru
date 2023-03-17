import React from "react";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Story from "./components/pages/Story";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <video src="/videos/cherry-blossom-84874.mp4" autoPlay loop muted></video> */}
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
