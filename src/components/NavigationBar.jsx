import { Outlet, Link } from "react-router-dom";
import Header from "./Header.jsx";

function NavigationBar() {
    return (
        <>
            <Header>
                <nav className="navigation_bar">
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Películas</h1>
                    </Link>
                    <div className="navigation_links">
                        <Link to="/" className="body-text color_white">Inicio</Link>
                        <Link to="/peliculas" className="body-text color_white">Películas</Link>
                        <Link to="/interpretes" className="body-text color_white">Intérpretes</Link>
                    </div>

                    <button onClick={() => setOpen(!open)}>
                        ☰
                    </button>
                    {/* Menú controlado por el estado */}
                    <nav className={open ? "block" : "hidden"}>
                        <NavLink to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
                        <NavLink to="/peliculas" onClick={() => setOpen(false)}>Películas</NavLink>
                        <NavLink to="/interpretes" onClick={() => setOpen(false)}>Intérpretes</NavLink>
                    </nav>
                </nav>
            </Header>
            <Outlet />  
        </>
    );
}
export default NavigationBar;