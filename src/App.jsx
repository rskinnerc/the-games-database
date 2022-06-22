import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-r from-marino-900 to-marino-900 via-marino-700 min-h-screen">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/genre/:genreSlug" element={<Genre />} />
      </Routes>
    </div>
  );
}

export default App;
