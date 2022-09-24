// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header>
        <p>Header Content</p>
        <Navigation>
          <p>Navigation Content</p>
        </Navigation>
      </Header>
      <main>
        <p>Main Content</p>
      </main>
      <Footer>
        <p>Footer Content</p>
      </Footer>
    </div>
  );
}

export default App;
