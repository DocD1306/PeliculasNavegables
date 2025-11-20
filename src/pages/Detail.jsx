import { useParams } from "react-router-dom";
import movies from "../data/movies-interpreters.js";

function Detail() {
    
    const { id } = useParams();

    // CASO 1: Película
    if (!id.includes("-")) {
        const movie = movies.find(m => m.id === Number(id));

        if (!movie) return <h2>Película no encontrada</h2>;

        return (
            <>
                <h1>{movie.nombre}</h1>
                <img src={movie.cartelera} alt={movie.nombre} width="300" />

                <p><strong>Clasificación:</strong> {movie.clasificacion}</p>
                <p><strong>Nota:</strong> {movie.nota}</p>
                <p><strong>Año:</strong> {movie.ano}</p>

                <h3>Intérpretes:</h3>
                <ul>
                    {movie.actores.map((actor, i) => (
                        <li key={i}>{actor.nombre}</li>
                    ))}
                </ul>
            </>
        );
    }

    // CASO 2: El ID tiene formato peliculaID-actorIndex → es un actor
    const [movieId, actorIndex] = id.split("-");

    const movie = movies.find(m => m.id === Number(movieId));
    if (!movie) return <h2>Película no encontrada</h2>;

    const actor = movie.actores[Number(actorIndex)];
    if (!actor) return <h2>Actor no encontrado</h2>;

    return (
        <>
            <h1>{actor.nombre}</h1>
            <img src={actor.imagen} alt={actor.nombre} width="300" />

            <p><strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}</p>
            <p>{actor.biografia}</p>

            <hr />
            <h3>Pertenece a la película:</h3>
            <p><strong>{movie.nombre}</strong></p>
        </>
    );
}
export default Detail;