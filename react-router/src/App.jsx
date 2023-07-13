import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;