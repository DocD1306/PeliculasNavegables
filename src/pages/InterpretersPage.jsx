import ReusableCard from "./ReusableCard.jsx";
import movies from "../data/movies.js";
import MainContent from "../components/MainContent.jsx";
import Header from "../components/Header.jsx";
import NavigationBar from "../components/NavigationBar.jsx";

function InterpretersPage() {
    return (
        <>
        
        <Header>
          <NavigationBar/>
        </Header>

        <MainContent titulo="Intérpretes de películas destacadas">
            
            <p className="body-text"> Listado de intérpretes disponibles:</p>

            <div className="card_grid">
                {
                movies.map( pelicula =>
                    pelicula.actores.map((actor, index) => (
                        <ReusableCard
                            key={index}
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10} // pasamos si la nota es 10
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