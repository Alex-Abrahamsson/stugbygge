import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/home";
import MyCv from "./pages/myCv/myCv";
import Dasset from "./pages/stugbygget/dasset";
import Friggan from "./pages/stugbygget/friggan";
import Storstugan from "./pages/stugbygget/storstugan";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myCv" element={<MyCv />} />
          <Route path="/stugbygget/dasset" element={<Dasset />} />
          <Route path="/stugbygget/friggan" element={<Friggan />} />
          <Route path="/stugbygget/storStugan" element={<Storstugan />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
