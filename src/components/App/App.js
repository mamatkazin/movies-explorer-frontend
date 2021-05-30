import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ShowError, HTTPError } from '../Error';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Main from '../Main/Main';
import Logout from '../Logout/Logout';
import NotFound from '../NotFound';
import Preloader from '../Preloader/Preloader';
import './App.css';

function App() {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);

  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: '',
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setCurrentUser({
      name: 'Маматказин И.А.',
      email: 'mamatkazin@mail.ru',
      _id: '111111111111111111',
    });
  }, [loggedIn, history]);

  React.useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((data) => {
          setMovies(data);
          console.log(data);
        })
        .catch((error) => {
          setErr({
            code:
              error instanceof HTTPError ? error.code : 'Непредвиденная ошибка',
            text: error.message,
          });
        });
    }
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    return mainApi
      .signup(name, email, password)
      .then((data) => {
        history.push('/signin');

        setErr({ code: 200, text: 'Вы успешно зарегистрировались!' });

        return true;
      })
      .catch((error) => {
        setErr({
          code:
            error instanceof HTTPError ? error.code : 'Непредвиденная ошибка',
          text: error.message,
        });

        return false;
      });
  }

  function handleLogin(email, password) {
    setLoggedIn(true);
    history.push('/');

    return true;
  }

  function handleSignOut() {
    setLoggedIn(false);
    history.push('/signin');

    return true;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          {/* {loggedIn ? (
            <Redirect to='/movies' />
          ) : (
            <Main loggedIn={loggedIn} />
          )} */}
          <Main loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute
          path='/movies'
          loggedIn={loggedIn}
          component={Movies}
          cards={movies}
        />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          component={SavedMovies}
          cards={movies}
        />
        <ProtectedRoute
          path='/profile'
          loggedIn={loggedIn}
          component={Profile}
        />
        <Route path='/signin'>
          {loggedIn ? (
            <Redirect to='/movies' />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
        <Route path='/signup'>
          {loggedIn ? (
            <Redirect to='/movies' />
          ) : (
            <Register onRegister={handleRegister} />
          )}
        </Route>
        <Route path='/signout'>{<Logout onSignOut={handleSignOut} />}</Route>
        <Route>{loggedIn ? <NotFound /> : <Redirect to='/signin' />}</Route>
      </Switch>
      <Preloader />
      <ShowError err={err} />
    </CurrentUserContext.Provider>
  );
}

export default App;
