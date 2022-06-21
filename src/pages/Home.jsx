import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGenres } from '../redux/categories/categoriesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchAllGenres());
  }, []);

  return (
    <div>
      <h1>Genres</h1>
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
