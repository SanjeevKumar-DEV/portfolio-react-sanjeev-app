import React from 'react';
import GitHubImage from "../assets/GitHub.png"; 
import LinkedInImage from "../assets/LinkedIn.png"; 
import EmailImage from "../assets/Email.png";


function Footer() {

  const icons = [
    {
      name:"GitHub",
      image: GitHubImage,
      className: "fa-brands fa-github-square fa-2xl px-3",
      link: "https://github.com/SanjeevKumar-DEV"
    },
    { 
      name:"LinkedIn",  
      image: LinkedInImage,
      className: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/sanjeev-kumar-2a05aa37/"
    },
    {
      name:"Stackoverflow",  
      image: EmailImage,
      className: "fab fa-stack-overflow",
      link: "mailto:sanjeevkumar@me.com"
    }
  ]

  return (
    <div className="flex-row flex-center px-1" style={{backgroundColor :"White"}}>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.className} target="_blank" rel="noopener noreferrer"><img style={{ borderRadius: "10px"}} src={icon.image} ></img></a>
      )
        )}
    </div>
  );
}

export default Footer;
