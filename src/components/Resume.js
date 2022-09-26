import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          Download my{" "}
          <a
            href="./assets/OtherResources/SanjeevKumarResumeNGV47.doc"
            download=""
          >
            Resume
          </a>
        </p>
        <h3>Front-end Skills</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
        </ul>
        <h3>Back-end Skils</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Express</li>
          <li>Node</li>
          <li>MySQL, Sequelize</li>
          <li>Microsoft SQL</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>MERN Stack</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
