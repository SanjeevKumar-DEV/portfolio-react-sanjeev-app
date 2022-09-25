import React, { useEffect } from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  console.log(pages);

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);


  return (    
    <nav>
      <ul className="flex-row">
        {pages.map((Page) => (
          <li
            className={`mx-2 ${
              currentPage.name === Page.name && 'navActive'
              }`}
            key={Page.name}
          >
            <span
              onClick={() => setCurrentPage(Page)}
            >
              {Page.name} 
            </span>
          </li>
        ))}
      </ul>
    </nav>
);
}

export default Navigation;
