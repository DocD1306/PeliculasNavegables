import HomePage from "./pages/HomePage.jsx";
import { Routes, Route, Navigate } from 'react-router-dom';
import InterpretersPage from "./pages/InterpretersPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";  
import PageNotFound from "./pages/PageNotFound.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminNavigationBar from "./components/AdminNavigationBar.jsx";

function App() {

  const isAuthenticated = true; // Cambia esto a true o false para simular un usuario autenticado

  return (
    <>
    <Routes>
      <Route path="/" element={ isAuthenticated ? <AdminNavigationBar /> : <NavigationBar /> }>
        <Route index element={<HomePage/>} />
        <Route path="peliculas" element={<MoviesPage/>} />
        <Route path="interpretes" element={<InterpretersPage/>}/>
        <Route path="detail/:id" element={<Detail/>}/>

        <Route path="admin" element={ isAuthenticated ? <AdminPage /> : <Navigate to="/" replace />}>

        </Route>

      </Route>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
