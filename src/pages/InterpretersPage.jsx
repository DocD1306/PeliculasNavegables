import ReusableCard from "../components/ReusableCard.jsx";
import interpreters from "../data/movies-interpreters.js";
import MainContent from "../components/MainContent.jsx";

function InterpretersPage() {
    return (
        <>
        <MainContent titulo="Intérpretes de películas destacadas">
            
            <p className="body-text"> Listado de intérpretes disponibles:</p>

            <div className="card_grid">
                {
                interpreters.map( pelicula =>
                    pelicula.actores.map((actor, index) => (
                        <ReusableCard
                            key={index}
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10} // pasamos si la nota es 10
                            textoDestacado="Intérprete destacado"
                        >
                        {actor.biografia}
                        </ReusableCard>
                    ))
                )
                }
            </div>
            
        </MainContent>
      </>

    );
}
export default InterpretersPage;