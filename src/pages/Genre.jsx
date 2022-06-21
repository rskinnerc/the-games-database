import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamesByGenre } from '../redux/games/gamesSlice';

const Genre = () => {
  const { genreSlug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesByGenre(genreSlug));
  }, []);

  return (
    <div>
      Genre Page:
      { genreSlug }
    </div>
  );
};

export default Genre;
