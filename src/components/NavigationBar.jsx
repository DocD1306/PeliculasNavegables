import { Outlet, Link, NavLink } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from "react";

function NavigationBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header>
                <nav className={open ? "navigation_bar block" : " navigation_bar hidden"}>
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Películas</h1>
                    </Link>
                    <button onClick={() => setOpen(!open)}>
                        ☰
                    </button>
                    <div className="navigation_links">
                        <NavLink to="/" onClick={() => setOpen(false)} className="body-text color_white">Inicio</NavLink>
                        <NavLink to="/peliculas" onClick={() => setOpen(false)} className="body-text color_white">Películas</NavLink>
                        <NavLink to="/interpretes" onClick={() => setOpen(false)} className="body-text color_white">Intérpretes</NavLink>
                    </div>

                </nav>
            </Header>
            <Outlet />  
        </>
    );
}
export default NavigationBar;