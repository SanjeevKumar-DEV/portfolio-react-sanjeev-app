// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

function App() {
  const [pages] = useState([
    { name: "AboutMe" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header>
        <Header>
          <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Navigation>
        </Header>
      </header>
      <main>
        <MainPage currentPage={currentPage}></MainPage>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
