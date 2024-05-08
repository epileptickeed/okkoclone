import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../redux/Slices/Movie/movieSlices';
import { MovieSelector } from '../redux/Slices/Movie/selector';
import movies from '../data/movies.json';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const { moviesData } = useSelector(MovieSelector);
  dispatch(setMovies(movies));
  console.log(moviesData);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      {moviesData.map((item) => {
        return (
          <div>
            <img src={item.poster_path} width={100} alt="" />
          </div>
        );
      })}
      <footer></footer>
    </>
  );
}

export default App;
