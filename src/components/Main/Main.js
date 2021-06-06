import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Footer from "../Footer";
//import { CurrentUserContext } from "../../contexts";

function Main(props) {
  //const currentUser = React.useContext(CurrentUserContext);

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
  );
}

export default Main;
