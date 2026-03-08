import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Basics from "./pages/Basics";
import Techniques from "./pages/Techniques";
import Playground from "./pages/Playground";

function App() {

  const [dark, setDark] = useState(false);

  return (

    <BrowserRouter>

        {/* Navbar */}
        <Navbar dark={dark} setDark={setDark} />

        {/* Command Palette */}
        <CommandPalette />

        {/* Pages */}
        <div className="pt-20">

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/playground" element={<Playground />} />

          </Routes>

        </div>

        {/* Footer appears on all pages */}
        <Footer />

    </BrowserRouter>

  );
}

export default App;