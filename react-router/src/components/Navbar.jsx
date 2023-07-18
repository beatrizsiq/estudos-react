import "../style/Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink
                to="/about"
                // className={({ isActive }) => (isActive ? "ativo" : "inativo")}
            >
                Sobre
            </NavLink>
        </nav>
    );
};

export default Navbar;
