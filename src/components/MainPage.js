import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import MainPageContent from "./MainPageContent";

function MainPage({ currentPage }) {
  const setPage = () => {
    if (currentPage.name === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage.name === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage.name === "Contact") {
      return <Contact />;
    } else if (currentPage.name === "Resume") {
      return <Resume />;
    } else {
      return <AboutMe />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <MainPageContent>{setPage()}</MainPageContent>
    </section>
  );
}
export default MainPage;
