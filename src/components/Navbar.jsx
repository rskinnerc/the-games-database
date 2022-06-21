import { Link, useMatch } from 'react-router-dom';

const Navbar = () => {
  const isHome = useMatch('/');

  return (
    <nav>
      {!isHome && <Link to="/"><i className="bi bi-arrow-left" /></Link>}
      <h1>Game Genres</h1>
      <i className="bi bi-mic-fill" />
      <i className="bi bi-gear-fill" />
    </nav>
  );
};

export default Navbar;
