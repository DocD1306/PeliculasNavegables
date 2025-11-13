import MainContent from "../components/MainContent.jsx";
import Header from "../components/Header.jsx";
import NavigationBar from "../components/NavigationBar.jsx";

function HomePage() {
    return (
      <>
        <Header>
          <NavigationBar/>
        </Header>
        <MainContent titulo="Página de Inicio">
          <p className="body-text">
            Bienvenido a la página de inicio de la aplicación de películas.
          </p>
        </MainContent>
      </>
        
    );
}
export default HomePage;

          // {/* {movies.map((pelicula) =>
          //   pelicula.actores.map((actor, index) => (
          //   <Interprete
          //     key={index}
          //     nombre={actor.nombre}
          //     foto={actor.imagen}>
          //       {actor.biografia}
          //   </Interprete>
          //   ))
          // )} */}
          // {/* {movies
          //   .filter(pelicula => pelicula.clasificacion === "Drama") // solo películas de Drama
          //   .map(pelicula =>
          //     pelicula.actores.map((actor, index) => (
          //       <Interprete
          //         key={index}
          //         nombre={actor.nombre}
          //         foto={actor.imagen}
          //       >
          //         {actor.biografia}
          //       </Interprete>
          //     ))
          //   )} */}

            //       {/* 
            // grid             Convierte el contenedor en una rejilla CSS Grid.
            // grid-cols-1      Por defecto, la rejilla tiene 1 columna.
            // sm:grid-cols-2   En pantallas pequeñas (≥ 640px), la rejilla tendrá 2 columnas.
            // lg:grid-cols-4   En pantallas grandes (≥ 1024px), la rejilla tendrá 4 columnas.
            // gap-1            Añade un pequeño espacio (gap) entre las celdas (0.25 rem = 4 px).
            // w-full           Hace que el <div> ocupe todo el ancho disponible.
            // mt-8             Añade un margen superior de 2 rem (32 px).
            // */}

        //            {/* <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"> */}
        // {/* <h1 className="h1__sqlito [text-shadow:0px_4px_4px_#00000040]"> */}
        // {/* <h1 className="contenedor__h1 [text-shadow:0px_4px_4px_#00000040]"> */}
        //   {/* Intérpretes
        // </h1> */}
        // {/* <p className="text-(--body-text-font-color) leading-(--body-text-line-height)"> */}