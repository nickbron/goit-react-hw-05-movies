import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Wrapper from './Componets/Container/container';
import Appbar from './Componets/AppBar/AppBar';

const HomeView = lazy(() =>
  import('./Views/HomeView' /*webpackChunkName: "home-page"*/),
);
const SearchMoviesView = lazy(() =>
  import('./Views/SearchMoviesView' /*webpackChunkName: "Search-page"*/),
);
const MovieDetailView = lazy(() =>
  import(
    './Views/MovieDetailView/MovieDetailView' /*webpackChunkName: "MovieDetail-page"*/
  ),
);
const NotFoundView = lazy(() => import('./Views/NotFoundView'));

export default function App() {
  return (
    <>
      <Wrapper>
        <Appbar />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>

            <Route path="/movies" exact>
              <SearchMoviesView />
            </Route>

            <Route path="/movies/:filmId">
              <MovieDetailView />
            </Route>

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Wrapper>
    </>
  );
}
