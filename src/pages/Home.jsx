import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllGenres } from '../redux/categories/categoriesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const genres = useSelector(({ categories }) => categories.categories
    .filter((genre) => genre.name.toLowerCase().includes(filter.toLowerCase())));

  useEffect(() => {
    dispatch(fetchAllGenres());
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-marino-600 to-marino-600 via-marino-300">
        <h1>The largest video games database.</h1>
        <p>
          More than 350.000 games for 50 platforms including mobiles. Start now filtering by genre!
        </p>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <ul>
        {genres && genres.map((genre) => (
          <li key={genre.id} className="even:bg-marino-500 odd:bg-marino-700">
            <Link to={`/genre/${genre.slug}`}>
              <img className="grayscale mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal" src={genre.image_background} alt={genre.name} />
              <h2>{genre.name}</h2>
              <h3>
                Games Count:
                {' '}
                {genre.games_count}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
