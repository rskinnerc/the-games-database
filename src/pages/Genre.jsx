import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGenreBySlug } from '../redux/categories/categoriesSlice';
import { fetchGamesByGenre } from '../redux/games/gamesSlice';

const Genre = () => {
  const { genreSlug } = useParams();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games[genreSlug]);
  const genre = useSelector((state) => state.categories.genresOverview[genreSlug]);

  useEffect(() => {
    dispatch(fetchGamesByGenre(genreSlug));
    dispatch(fetchGenreBySlug(genreSlug));
  }, []);

  return (
    <div className="sm:w-96 mx-auto">
      {genre && (
        <>
          <div className="h-52 flex flex-col justify-end font-lato bg-contain" style={{ backgroundImage: `url(${genre.image_background})` }}>
            <h2 className="text-3xl text-right px-3 bg-marino-500/80 text-white font-bold">
              { genre.name }
              {' '}
              Games
            </h2>
            <span className="px-3 text-right bg-marino-500/80 text-white">
              Games Count:
              {' '}
              { genre.games_count }
            </span>
          </div>
          <div className="font-lato text-sm bg-marino-600 text-white p-1 uppercase">{`${genre.name} GAMES BREAKDOWN`}</div>
        </>
      )}
      <ul>
        {games && games.map((game) => (
          <li key={game.id} className="flex justify-between font-gill odd:bg-marino-500 even:bg-marino-700 text-white items-center px-2 py-6">
            <span className="font-bold">{game.name}</span>
            <div className="flex flex-col items-center">
              <span>{`${game.rating} / 5`}</span>
              <span className="text-marino-300">{`${game.ratings_count} votes`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
