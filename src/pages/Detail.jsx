import { useParams, Link, useNavigate } from "react-router-dom";
import movies from "../data/movies-interpreters.js";

function Detail() {
    
    const { id } = useParams();
    const navigate = useNavigate();

    // CASO 1: Película (Si el id no contiene un guion)
    if (!id.includes("-")) {
        const movie = movies.find(m => m.id === Number(id));
        
        return (
            <>
                {/* aria-labelledby="id": 
                   Vincula este contenedor con un elemento de texto existente (el h1 con id="movie-title").
                   El lector anunciará: "Sección: [Nombre de la película]".
                */ }
                <section aria-labelledby="movie-title" className="max-w-5xl flex flex-col items-center w-full">
                    
                    {/* aria-label="texto": 
                       Proporciona una etiqueta accesible para elementos interactivos cuyo texto visible 
                       es ambiguo (como "Volver" o un icono). El lector leerá esto en lugar del texto visual.
                    */}
                    <button 
                        onClick={() => navigate(-1)} 
                        className="self-start px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
                        aria-label="Volver al listado de películas"
                    >
                        Volver
                    </button>

                    <h1 id="movie-title" className="main_section__title text-center">{movie.nombre}</h1>
                    
                    <div className="w-full flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                        
                        {/* <figure>: 
                           Elemento semántico para agrupar contenido multimedia (imágenes, diagramas) 
                           con su leyenda opcional. Aporta estructura al documento.
                        */}
                        <figure className="w-full md:w-1/3 m-0">
                            {/* alt="descripción": 
                               Texto alternativo OBLIGATORIO. Describe la imagen si no carga visualmente 
                               o para usuarios con discapacidad visual.
                            */}
                            <img 
                                src={movie.cartelera} 
                                alt={`Póster de la película ${movie.nombre}`} 
                                className="rounded-xl shadow-lg object-cover w-full"
                            />
                        </figure>

                        <div className="flex flex-col gap-4 w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 items-center text-center">
                            <h2 id="details-heading" className="font-heading-h5 color_primary border-b border-primary pb-2 w-full">Detalles</h2>
                            
                            {/* <dl>, <dt>, <dd>: 
                               Lista de Descripción. Es la forma semánticamente correcta de marcar pares 
                               de clave-valor (metadatos), permitiendo una navegación más lógica que usar simples divs o párrafos.
                            */}
                            <dl className="body-text flex flex-col gap-2 w-full" aria-labelledby="details-heading">
                                <div className="flex flex-wrap justify-center gap-2 items-baseline">
                                    <dt className="color_primary font-bold min-w-fit">Clasificación:</dt>
                                    <dd className="m-0">{movie.clasificacion}</dd>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 items-baseline">
                                    <dt className="color_primary font-bold min-w-fit">Nota:</dt>
                                    <dd className="m-0">{movie.nota}</dd>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 items-baseline">
                                    <dt className="color_primary font-bold min-w-fit">Género:</dt>
                                    <dd className="m-0">{movie.resumen}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <section aria-labelledby="cast-heading" className="w-full">
                        <h3 id="cast-heading" className="font-heading-h2 color_primary mb-6 border-l-4 border-primary pl-4">Intérpretes</h3>
                        
                        <ul className="card_grid list-none p-0">
                            {movie.actores.map((actor, i) => (
                                <li key={i}>
                                    {/* <article>: 
                                       Indica que este contenido es una composición independiente (una tarjeta de actor)
                                       que tiene sentido por sí misma dentro de la lista.
                                    */}
                                    <article className="h-full">
                                        <Link 
                                            to={`/detail/${movie.id}-${i}`}
                                            className="article_card items-center text-center hover:bg-gray-50 hover:-translate-y-1 transition-transform h-full block"
                                            aria-label={`Ver detalles del actor ${actor.nombre}`}
                                        >
                                            <figure className="m-0 flex flex-col h-full">
                                                {/* aria-hidden="true": 
                                                   Oculta el elemento al lector de pantalla. Se usa aquí porque la imagen es decorativa 
                                                   (el nombre del actor ya se lee en el figcaption), evitando redundancia.
                                                */}
                                                <img 
                                                    src={actor.imagen} 
                                                    alt="" 
                                                    className="w-full aspect-[3/4] object-cover rounded-lg mb-2 shadow-sm"
                                                    aria-hidden="true" 
                                                />
                                                {/* <figcaption>: 
                                                   Leyenda de la figura. Vincula programáticamente el texto con la imagen anterior.
                                                */}
                                                <figcaption className="body-text font-bold mt-auto">
                                                    {actor.nombre}
                                                </figcaption>
                                            </figure>
                                        </Link>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </>
        );
    }

    // CASO 2: Actor
    const [movieId, actorIndex] = id.split("-");

    const movie = movies.find(m => m.id === Number(movieId));
    const actor = movie.actores[Number(actorIndex)];

    return (
        <>
            <article aria-labelledby="actor-name" className="max-w-4xl flex flex-col items-center text-center md:text-left w-full">
                <button 
                    onClick={() => navigate(-1)} 
                    className="self-start px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
                    aria-label="Volver al listado de intérpretes"
                >
                    Volver
                </button>

                <h1 id="actor-name" className="main_section__title">{actor.nombre}</h1>
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full mb-8">
                    
                    <figure className="w-full md:w-auto m-0 shrink-0">
                        <img 
                            src={actor.imagen} 
                            alt={`Foto de ${actor.nombre}`} 
                            width="300" 
                            className="rounded-xl shadow-lg object-cover aspect-[3/4]"
                        />
                    </figure>
                    
                    <div className="flex flex-col gap-4 w-full">
                        <dl className="body-text m-0">
                            <div className="flex gap-2 justify-center md:justify-start items-baseline">
                                <dt className="color_primary font-bold">Fecha de nacimiento:</dt>
                                <dd className="m-0">{actor.fechaNacimiento}</dd>
                            </div>
                        </dl>
                        <p className="body-text text-gray-600 leading-relaxed">
                            {actor.biografia}
                        </p>
                    </div>
                </div>

                {/* aria-hidden en HR: Indica que esta línea es puramente estética y no un cambio de tema semántico */}
                <hr className="w-full border-t-2 border-primary opacity-20 my-6" aria-hidden="true" />

                <section className="w-full flex flex-col items-center md:items-start bg-[var(--colorsecondary)] p-6 rounded-xl" aria-labelledby="related-movie">
                    <h3 id="related-movie" className="font-heading-h5 color_primary mb-2">Pertenece a la película:</h3>
                    
                    <Link to={`/detail/${movie.id}`} className="hover:underline">
                        <p className="font-heading-h2 text-gray-800">{movie.nombre}</p>
                    </Link>
                </section>
            </article>
        </>
    );
}
export default Detail;