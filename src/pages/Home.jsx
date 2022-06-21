import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllGenres } from '../redux/categories/categoriesSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGenres());
  });

  return (<div>Home Page</div>);
};

export default Home;
