import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header>
      <NavigationBar/>
    </Header>
    <HomePage/>
    {/* <Routes element={<HomePage/>}>
      <Route path="/" element={<HomePage/>} />
    </Routes> */}
    </>
  )
}

export default App
