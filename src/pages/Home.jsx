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
    <div className="sm:w-96 mx-auto">
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
      <ul className="flex flex-row flex-wrap">
        {genres && genres.map((genre) => (
          <li key={genre.id} className="odd:bg-marino-500 h-52 even:bg-marino-700 basis-1/2 relative">
            <Link to={`/genre/${genre.slug}`}>
              <i className="bi bi-arrow-right-circle absolute top-0.5 right-1 z-30 font-bold text-white" />
              <img className="h-4/5 grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal" src={genre.image_background} alt={genre.name} />
              <h2 className="font-lato font-semibold text-white px-1 text-right">{genre.name}</h2>
              <h3 className="text-sm text-white font-lato px-1 text-right">
                <span className="text-marino-200">
                  Games Count:
                </span>
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
