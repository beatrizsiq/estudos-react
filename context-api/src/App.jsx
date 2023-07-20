import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ChakraBaseProvider, Container } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
    return (
        <ChakraProvider>
            <Container bgGradient="linear(to-l, #7928CA, #FF0080)" maxW='100%'>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </ChakraProvider>
    );
}

export default App;
