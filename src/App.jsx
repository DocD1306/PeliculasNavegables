import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./pages/HomePage.jsx";
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <header> 
      <NavigationBar/>
    </header>
    <HomePage/>
    {/* <Routes element={<HomePage/>}>
      <Route path="/" element={<HomePage/>} />
    </Routes> */}
    </>
  )
}

export default App
