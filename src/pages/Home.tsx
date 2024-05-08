import { useState } from 'react';
import { UseMainContext } from '../../Context/MainContext';
import buttons from '../../data/genresBtns.json';

const Home = () => {
  type Movies = {
    budget: number;
    id: number;
    poster_path: string;
    title: string;
  };

  const { moviesData } = UseMainContext();
  const [filteredMovies, setFilteredMovies] = useState<Movies[]>([]);

  console.log(filteredMovies);

  const handleClick = (title: string) => {
    const filtered = moviesData.filter((item) => {
      return item.genres.includes(title);
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="home">
      <div className="buttons">
        {buttons.map((item, index) => {
          return (
            <button onClick={() => handleClick(item)} key={index}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="content">
        {filteredMovies.length > 0
          ? filteredMovies.map((item) => {
              return (
                <div key={item.id} className="content_card">
                  <img width={300} src={item.poster_path} alt="" />
                  <h1>{item.title}</h1>
                </div>
              );
            })
          : 'no'}
      </div>
    </div>
  );
};

export default Home;
