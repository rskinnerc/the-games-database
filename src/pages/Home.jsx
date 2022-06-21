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
      <div className="bg-gradient-to-br from-marino-500 to-marino-900 flex flex-col items-center text-white px-5 py-8">
        <h1 className="text-2xl text-center font-lato">The largest video games database.</h1>
        <p className="my-6 text-center">
          More than
          {' '}
          <span className="font-bold text-marino-200 text-xl">
            350.000
          </span>
          {' '}
          games for 50 platforms including mobiles. Start now filtering by genre!
        </p>
        <input placeholder="Filter by genre" className="bg-marino-50 rounded-md p-3 border-0 outline-0 ring-2 focus:ring-marino-400 ring-marino-200 text-marino-600 font-bold" type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="font-lato text-sm bg-marino-600 text-white p-1">STATS BY GENRE</div>
      <ul>
        {genres && genres.map((genre) => (
          <li key={genre.id} className="even:bg-marino-500 odd:bg-marino-700">
            <Link to={`/genre/${genre.slug}`}>
              <img className="grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal" src={genre.image_background} alt={genre.name} />
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
