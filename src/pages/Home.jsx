import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <h1>Genres</h1>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {genres && genres.map((genre) => (
          <li key={genre.id}>
            {genre.name}
            {' '}
            {genre.games_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
