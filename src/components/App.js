import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./Container";
import { Navigation } from "./Navigation";

const HomePage = lazy(() => import("../views/HomePage"));
const MovieDetailsPage = lazy(() => import("../views/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../views/MoviesPage"));

const App = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<p>Загружаю...</p>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route path="/movies">
              <MoviesPage />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
