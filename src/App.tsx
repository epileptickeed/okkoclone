import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../redux/Slices/Movie/movieSlices';
import { MovieSelector } from '../redux/Slices/Movie/selector';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const { moviesData } = useSelector(MovieSelector);
  console.log(moviesData);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
