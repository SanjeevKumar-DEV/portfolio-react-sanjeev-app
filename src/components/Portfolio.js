import React, { useState } from 'react';
import Project from "./Project";

const Portfolio = () => {

  const [projects] = useState([
    {
        name: 'fashionIndustry-Image-Management',
        imageName: 'fashionIndustry-Image-Management',
        description: 'MERN Stack, ,Heroku, React, CSS, JavaScript, HTML, Local Storage',
        link: "https://fashion-indus-image-management.herokuapp.com/",
        repo: "https://github.com/SanjeevKumar-DEV/fashionIndustry-Image-Management"
      },
    {
      name: 'Doctor-Appointment',
      imageName: 'Doctor-Appointment',
      description: 'MERN Stack',
      link: "https://cryptic-wave-07227.herokuapp.com/",
      repo: "https://github.com/SanjeevKumar-DEV/Doctor-Appointment"
    },
    {
        name: 'Go-to-your-Movie',
        imageName: 'Go-to-your-Movie',
        description: 'API, CSS, JQuery, JavaScript, HTML',
        link: "https://black-mandarin.github.io/Go-to-your-Movie/",
        repo: "https://github.com/Black-Mandarin/Go-to-your-Movie"
      },
      {
        name: 'Work-Day-Scheduler',
        imageName: 'Work-Day-Scheduler',
        description: 'CSS, JQuery, JavaScript, HTML, Local Storage',
        link: "https://sanjeevkumar-dev.github.io/Work-Day-Scheduler/",
        repo: "https://github.com/SanjeevKumar-DEV/Work-Day-Scheduler"
      },
      {
        name: 'Weather',
        imageName: 'Weather',
        description: 'API, CSS, JQuery, JavaScript, HTML, Local Storage',
        link: "https://sanjeevkumar-dev.github.io/Weather/",
        repo: "https://github.com/SanjeevKumar-DEV/Weather"
      },
      {
        name: 'Timing-Coding-Quiz',
        imageName: 'Timing-Coding-Quiz',
        description: 'CSS, JavaScript, HTML, Local Storage',
        link: "https://github.com/SanjeevKumar-DEV/Timing-Coding-Quiz",
        repo: "https://sanjeevkumar-dev.github.io/Timing-Coding-Quiz/"
      },
      {
        name: 'Social-Network-API',
        imageName: 'Social-Network-API',
        description: 'API, NoSql, Server, Client',
        link: "https://github.com/SanjeevKumar-DEV/Social-Network-API",
        repo: "https://github.com/SanjeevKumar-DEV/Social-Network-API"
      },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, identity) => (
          <Project
            project={project}
            key={"project" + identity}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;