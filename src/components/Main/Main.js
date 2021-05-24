import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Footer from "../Footer";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="dark"></Header>
      <Banner></Banner>
      <NavTab></NavTab>
      <main className="content">
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
    // <main className="content">
    //   <section className="profile content__profile">
    //     <button
    //       type="button"
    //       className="button button_opacity_none profile__button-avatar"
    //       aria-label="Изменить аватар пользователя"
    //       onClick={() => props.onEditAvatar(currentUser)}
    //     >
    //       <img src={currentUser.userAvatar} alt="Аватар пользователя" className="profile__image" />
    //     </button>
    //     <div className="profile__cell">
    //       <div className="profile__row-title">
    //         <h1 className="profile__title">{currentUser.userName || "Loading..."}</h1>
    //         <button
    //           type="button"
    //           className="button profile__button-edit"
    //           aria-label="Редактировать профиль"
    //           onClick={() => props.onEditProfile(currentUser)}
    //         ></button>
    //       </div>
    //       <p className="profile__subtitle">{currentUser.userDescription || "Loading..."}</p>
    //     </div>
    //     <button
    //       type="button"
    //       className="button profile__button-add"
    //       aria-label="Добавить карточку"
    //       onClick={props.onAddPlace}
    //     ></button>
    //   </section>
    //   <section className="elements content__elements">
    //     <ul className="elements__list">
    //       {
    //         props.cards.length > 0 && props.cards.map((card, i) => (
    //           <Card
    //             key={card._id}
    //             card={card}
    //             onCardClick={props.onCardClick}
    //             onCardLike={props.onCardLike}
    //             onCardDelete={props.onCardDelete}
    //           />
    //         )).reverse()
    //       }
    //     </ul>
    //   </section>
    // </main>
  );
}

export default Main;
