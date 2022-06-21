import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/genre/:genreSlug" element={<Genre />} />
      </Routes>
    </div>
  );
}

export default App;
