import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { GetTrendingFilms } from '../../Services/api';

const HomeView = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetTrendingFilms();
        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        return null;
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link> */}
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: {
                    from: {
                      location,
                      label: 'Go Back HOME',
                    },
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeView;
