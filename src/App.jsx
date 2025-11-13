import HomePage from "./pages/HomePage.jsx";
import { Routes, Route, Navigate} from 'react-router-dom';
import InterpretersPage from "./pages/InterpretersPage.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<InterpretersPage/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default App
