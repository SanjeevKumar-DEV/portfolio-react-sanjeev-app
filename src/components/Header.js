import React from "react";
import porftfolioBackground from '../assets/portfolioBakground.jpeg';

const Header = (props) => {
  return (
    
    <div>
      <header className="flex-row space-between px-1">
        <h1>Sanjeev Portfolio</h1>
        <img src={porftfolioBackground} alt=""></img>
        {props.children}
      </header>
    </div>
  );
};

export default Header;
