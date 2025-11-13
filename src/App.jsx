import HomePage from "./pages/HomePage.jsx";
import { Routes, Route, Navigate} from 'react-router-dom';
import InterpretersPage from "./pages/InterpretersPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";  
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<HomePage/>} />
        <Route path="peliculas" element={<MoviesPage/>} />
        <Route path="interpretes" element={<InterpretersPage/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
