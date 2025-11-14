import { Outlet, Link } from "react-router-dom";
import Header from "./Header.jsx";

function AdminNavigationBar() {
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
                        <Link to="/admin" className="body-text color_white">Admin</Link>
                    </div>
                </nav>
            </Header>
            <Outlet />  
        </>
    );
}

export default AdminNavigationBar;