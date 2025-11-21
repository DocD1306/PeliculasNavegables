import ReusableCard from "../components/ReusableCard.jsx";
import interpreters from "../data/movies-interpreters.js";
import MainContent from "../components/MainContent.jsx";
import { Link } from "react-router-dom";

function InterpretersPage() {
    return (
        <>
            <MainContent>
                <h1 id="main-section-title" className="font-heading-h1 main_section__title"> Nuestros intérpretes destacados </h1>
                <p className="body-text"> Listado de intérpretes disponibles:</p>

                {/* Agrupamos las tarjetas en una lista para anunciar la cantidad de elementos */}
                <ul className="card_grid">
                    {
                    interpreters.map( pelicula =>
                        pelicula.actores.map((actor, index) => (
                            <li key={`${pelicula.id}-${index}`}>
                                <Link 
                                    to={`/detail/${pelicula.id}-${index}`} 
                                    aria-label={`Ver detalles del intérprete ${actor.nombre}`}
                                >
                                    <ReusableCard
                                        nombre={actor.nombre}
                                        foto={actor.imagen}
                                        esNota10={pelicula.nota === 10} // pasamos si la nota es 10
                                        textoDestacado="Intérprete destacado"
                                    >
                                    {actor.biografia}
                                    </ReusableCard>
                                </Link>
                            </li>
                        ))
                    )
                    }
                </ul>    
            </MainContent>
      </>

    );
}
export default InterpretersPage;