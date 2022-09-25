import React from "react";
import ProfilePic from "../assets/sanjeevProfilePhoto.jpeg";

const AboutMe = () => {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="flex-row">
          <div className="profile-img my-5">
            <img style={{ fontSize: "96px" }} src={ProfilePic}></img>
          </div>
          <div>
          <p className="my-2">
            I am an excellent full stack developer and determined to contribute my
            outstanding technical, mathematical, problem solving and management
            skills to an organization so that it achieves its goal. Changing
            needs and development in concerned technologies require a heuristic
            change in employee’s ability; therefore to cope with this
            expectation is my prime objective. I always focus to take a
            result-oriented path to achieve excellent product quality.
          </p>
          </div>
        </div>
        <div className="flex-row list-of-skill">
          <ul>
            <li>Full Stack Developer</li>
            <li>MERN Stack</li>
            <li>React</li>
            <li>Express JS</li>
            <li>NoSQL</li>
            <li>Java Script</li>
            <li>JQuery</li>
            <li>CSS</li>
            <li>MySQL, SQL, NoSql, MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
