import { Outlet, Link } from "react-router-dom";
import Header from "./Header.jsx";

function NavigationBar() {
    return (
        <>
            <Header>
                <nav className="navigation_bar">
                    <Link to="/">
                        <h1 className="color_white h1__sqlito-sin-color">Películas</h1>
                    </Link>
                    <Link to="/peliculas">Peliculas</Link>
                    <Link to="/interpretes">Interpretes</Link>
                </nav>
            </Header>
            <Outlet />  
        </>
    );
}
export default NavigationBar;