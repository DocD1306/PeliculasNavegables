import movies from "../data/movies-interpreters.js";
import MainContent from "../components/MainContent.jsx";
import ReusableCard from "../components/ReusableCard.jsx";

function MoviesPage() {

    /*
    Componente que muestra la página de películas con el listado de películas.
    */
    return (
        <>
            <MainContent titulo="Nuestro catálogo de películas">
            
            <p className="body-text">Listado de películas disponibles:</p>

            <div className="card_grid">
                {
                    movies.map( (movie, index) => (
                            <ReusableCard
                                key={index}
                                nombre={movie.nombre}
                                foto={movie.cartelera}
                                esNota10={movie.nota === 10} // pasamos si la nota es 10
                                textoDestacado="Película destacada"
                            >
                            {movie.resumen}
                            </ReusableCard>
                        )
                    )
                }
            </div>
            
            </MainContent>
        </>
    );
}

export default MoviesPage;