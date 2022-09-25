import React from 'react';
// import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { name, imageName, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={require(`../assets/projects/${imageName}.png`)}
        alt={name}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{name}</a>{' '}
          <a href={repo}>Repository</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
