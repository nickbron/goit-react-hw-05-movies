import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  Switch,
} from 'react-router-dom';
import { GetFilmByID } from '../../Services/api';
import { Button, Image } from './MovieDetailView.styled';

const CastView = lazy(() =>
  import('../CastView/CastView' /*webpackChunkName: "cast"*/),
);
const ReviewsView = lazy(() =>
  import('../ReviewsView/ReviewsView' /*webpackChunkName: "Reviews"*/),
);
const MovieDetailView = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const [film, setFilm] = useState({});
  const { filmId } = useParams();

  function getYear(dateString) {
    return dateString.split('-')[0];
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetFilmByID(filmId);
        if (response.status === 200) {
          const {
            id,
            poster_path,
            title,
            release_date,
            vote_average,
            overview,
            genres,
          } = response.data;
          const year = getYear(release_date);
          const parseGenres = genres.map(({ name }) => name).join(', ');
          setFilm({
            id,
            poster_path,
            title,
            year,
            vote_average,
            overview,
            parseGenres,
          });
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        return null;
      }
    }
    fetchData();
  }, [filmId]);

  const { poster_path, title, year, vote_average, overview, parseGenres } =
    film;

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      {film && (
        <>
          <Button type="button" onClick={onGoBack}>
            {location?.state?.from?.label ?? 'GoBack'}
          </Button>
          <Image
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            alt={title}
          />
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {vote_average * 10} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <span> {parseGenres}</span>
          <hr />
          <h1>Additional information</h1>

          <ul>
            <li>
              {/* <NavLink to={`${url}/cast`}>Cast</NavLink> */}
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/' },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              {/* <NavLink to={`${url}/reviews`}>Reviews</NavLink> */}
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/' },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Switch>
              <Route path={`${path}/cast`}>
                <CastView />
              </Route>

              <Route path={`${path}/reviews`}>
                <ReviewsView />
              </Route>
            </Switch>
          </Suspense>
          <hr />
        </>
      )}
    </>
  );
};

export default MovieDetailView;
