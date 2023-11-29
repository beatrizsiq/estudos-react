import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
    const hooksLink = [
        { id: 1, to: "/", name: "Home", element: <Home /> },
        { id: 2, to: "/about", name: "Sobre", element: <About /> },
    ];
    return (
        <div className='App'>
            <BrowserRouter>
                <ul>
                    {hooksLink.map((link) => (
                        <li key={link.id}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <Routes>
                    {hooksLink.map((link) => (
                        <Route
                            key={link.id}
                            path={link.to}
                            element={link.element}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
