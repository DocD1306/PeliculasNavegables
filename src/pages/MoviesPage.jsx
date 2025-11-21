import movies from "../data/movies-interpreters.js";
import ReusableCard from "../components/ReusableCard.jsx";
import { Link } from "react-router-dom";

function MoviesPage() {

    /*
    Componente que muestra la página de películas con el listado de películas.
    */
    return (
        <>
            <h1 id="main-section-title" className="font-heading-h1 main_section__title"> Nuestro catálogo de películas </h1>
            <p className="body-text">Listado de películas disponibles:</p>

            <ul className="card_grid">
                {
                    movies.map( (movie) => (
                        <li key={movie.id}>
                            <Link to={`/detail/${movie.id}`}
                                /* aria-label: Evita que el lector lea todo el contenido de la tarjeta como texto del enlace */
                                aria-label={`Ver detalles de la película ${movie.nombre}`}
                            >
                                <ReusableCard
                                    nombre={movie.nombre}
                                    foto={movie.cartelera}
                                    esNota10={movie.nota === 10} // pasamos si la nota es 10
                                    textoDestacado="Película destacada"
                                >
                                {movie.clasificacion}
                                </ReusableCard>
                            </Link>
                        </li>
                    ))
                }
            </ul>            
        </>
    );
}

export default MoviesPage;