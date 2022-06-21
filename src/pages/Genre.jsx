import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamesByGenre } from '../redux/games/gamesSlice';

const Genre = () => {
  const { genreSlug } = useParams();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games[genreSlug]);

  useEffect(() => {
    dispatch(fetchGamesByGenre(genreSlug));
  }, []);

  return (
    <div>
      Genre Page:
      { genreSlug }
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </div>
  );
};

export default Genre;
