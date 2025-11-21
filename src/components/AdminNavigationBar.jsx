import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import MainContent from "./MainContent.jsx";

function AdminNavigationBar() {
   /* Estado para controlar la apertura/cierre del menú móvil */
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                {/* Añadimos 'aria-label' al nav para identificar esta navegación específica 
                    si hubiera más de una en la página (ej: footer, sidebar).
                */}
                <nav className="navigation_bar relative" aria-label="Navegación principal">

                    {/* Enlace al inicio.*/}
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Películas</h1>
                    </Link>

                    {/* Accesibilidad en el Botón:
                        1. type="button": Previene comportamientos inesperados de submit.
                        2. aria-label: Describe la acción para usuarios que no ven el icono "☰".
                        3. aria-expanded: Informa al lector de pantalla si el menú está abierto (true) o cerrado (false).
                        4. aria-controls: Vincula este botón con el menú que controla mediante su ID.
                    */}
                    <button 
                        type="button"
                        className="text-white text-3xl md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={open}
                        aria-controls="menu-navegacion"
                    >
                        <span aria-hidden="true">☰</span>
                    </button>

                    {/* 
                        Cambio semántico: Usamos <ul> (lista desordenada) en lugar de un <div> genérico.
                        Esto permite a los lectores de pantalla anunciar "Lista de 3 elementos".
                        
                        Añadimos id="menu-navegacion" para que coincida con el aria-controls del botón.
                    */}
                    <ul
                        id="menu-navegacion"
                        className={
                            open
                                ? "navigation_links flex flex-col items-center w-full absolute top-full left-0 bg-[var(--colorprimary)] z-50 py-4 gap-4 shadow-xl md:static md:flex-row md:w-auto md:shadow-none md:p-0 md:gap-10"
                                : "navigation_links hidden md:flex md:flex-row md:items-center md:gap-10"
                        }
                    >
                        {/* Cada elemento de navegación debe ir dentro de un <li> */}
                       <li>
                            {/* NavLink para la página de Inicio:
                                - end: Asegura que la ruta raíz "/" no coincida parcialmente con otras rutas.
                                - aria-current: Se calcula dinámicamente. Si isActive es true, asigna "page", 
                                  indicando al lector de pantalla que el link referencia a la página actual.
                                - onCliclk: Cierra el menú móvil al seleccionar una opción.
                            */}
                            <NavLink 
                                to="/" 
                                end
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/peliculas" 
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Películas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/interpretes" 
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Intérpretes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin" 
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Administrador
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </header>

            {/*Envolvemos el Outlet en MainContent para mantener el diseño consistente en las páginas.*/}
            <MainContent>
                <Outlet />  
            </MainContent>
        </>
    );
}

export default AdminNavigationBar;