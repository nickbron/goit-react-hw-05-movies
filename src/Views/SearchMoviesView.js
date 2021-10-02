import SearchForm from 'Componets/SearchForm/SearchForm';
import { SearchFilmByName } from '../Services/api';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

export default function SearchMoviesView() {
  const [filmName, setfilmName] = useState(null);
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await SearchFilmByName(filmName);
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
    if (filmName === null) {
      return;
    }
    fetchData();
  }, [filmName]);

  const handleBarSubmit = movieName => {
    setfilmName(movieName);
    history.push({ ...location, search: `query=${movieName}` });
  };

  const lastValueInput = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    setfilmName(lastValueInput);
  }, [lastValueInput]);

  return (
    <div>
      <SearchForm onSearch={handleBarSubmit} />
      <div>
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: {
                      from: {
                        location,
                        label: 'On Search ',
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
    </div>
  );
}
