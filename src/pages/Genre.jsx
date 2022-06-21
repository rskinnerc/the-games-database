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
    <div>
      Genre Page:
      {genre && (
        <div style={{ backgroundImage: `url(${genre.image_background})` }}>
          <p>{ genre.name }</p>
          { genre.games_count }
        </div>
      )}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </div>
  );
};

export default Genre;
