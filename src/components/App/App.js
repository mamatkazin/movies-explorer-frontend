import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
// import EditProfilePopup from "./EditProfilePopup";
// import EditAvatarPopup from "./EditAvatarPopup";
// import AddPlacePopup from "./AddPlacePopup";
// import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ShowError, HTTPError } from "../Error";
import api from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import Register from "../Register";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Main from "../Main/Main";
import Logout from "../Logout/Logout";
// import InfoTooltip from "./InfoTooltip";
import "./App.css";

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    email: "",
    _id: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setCurrentUser({
      name: "Маматказин И.А.",
      email: "mamatkazin@mail.ru",
      _id: "111111111111111111",
    });
  }, [loggedIn, history]);

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getMovies()
        .then((data) => {
          setMovies(data);
          console.log(data);
        })
        .catch((error) => {
          setErr({
            code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
            text: error.message,
          });
        });
    }
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    history.push("/signin");

    return true;
  }

  function handleLogin(email, password) {
    setLoggedIn(true);
    history.push("/");

    return true;
  }

  function handleSignOut() {
    setLoggedIn(false);
    history.push("/signin");

    return true;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          {/* {loggedIn ? (
            <Redirect to='/movies' />
          ) : (
            <Main loggedIn={loggedIn} />
          )} */}
          <Main loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          cards={movies}
          // email={email}
          // onEditProfile={handleEditProfileClick}
          // onAddPlace={handleAddPlaceClick}
          // onEditAvatar={handleEditAvatarClick}
          // onCardClick={handleCardClick}
          // onCardLike={handleCardLike}
          // onCardDelete={handleCardDelete}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          // cards={cards}
          // email={email}
          // onEditProfile={handleEditProfileClick}
          // onAddPlace={handleAddPlaceClick}
          // onEditAvatar={handleEditAvatarClick}
          // onCardClick={handleCardClick}
          // onCardLike={handleCardLike}
          // onCardDelete={handleCardDelete}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          // cards={cards}
          // email={email}
          // onEditProfile={handleEditProfileClick}
          // onAddPlace={handleAddPlaceClick}
          // onEditAvatar={handleEditAvatarClick}
          // onCardClick={handleCardClick}
          // onCardLike={handleCardLike}
          // onCardDelete={handleCardDelete}
        />
        <Route path="/signin">
          {loggedIn ? <Redirect to="/movies" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/signup">
          {loggedIn ? <Redirect to="/movies" /> : <Register onRegister={handleRegister} />}
        </Route>
        <Route path="/signout">{<Logout onSignOut={handleSignOut} />}</Route>
        <Route>{loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}</Route>
      </Switch>

      {/* <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups}>
        <>
          <img className="popup__icon" src={infoTooltip.src} alt={infoTooltip.alt} />
          <p className="popup__message">{infoTooltip.message}</p>
        </>
      </InfoTooltip>
      <ShowError err={err} /> */}
    </CurrentUserContext.Provider>
  );
}

export default App;
