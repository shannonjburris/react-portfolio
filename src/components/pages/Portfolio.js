import React from 'react';

export default function Portfolio() {
  return (
    <div class="body">
      <header>
      <h1 id="work">Portfolio</h1>
      </header>
      <div class="flex-row">
        <div class="left">
        </div>
        <div class="content" id="work-content">
        <article>
            <div class="card-links">
              <h2>The Clean Water Project</h2>
              <h3>JavaScript/Handlebars/Node and Multer S3</h3>
              <h4><a href="https://github.com/shannonjburris/Clean_water_project" target="_blank" rel="noreferrer">Repo Link</a></h4>
            </div>
            <a href="https://algae-busters-clean-water-proj.herokuapp.com/">
              <img src="https://raw.githubusercontent.com/shannonjburris/react-portfolio/main/Assets/Images/Screen%20Shot%202021-08-09%20at%205.17.31%20PM.png" alt="Clean_water_project" />
            </a>
          </article>
          <article>

            <div class="card-links">
              <h2>Parks & Pages</h2>
              <h3>HTML/JS/CSS and Server-side APIs</h3>
              <h4><a href="https://github.com/RLAQUEA/project-1" target="_blank" rel="noreferrer">Repo Link</a></h4>
            </div>
            <a href="https://rlaquea.github.io/Parks-and-Pages/">
            <img src="https://raw.githubusercontent.com/shannonjburris/react-portfolio/main/Assets/Images/125324077-875c8680-e30d-11eb-9109-51b1d29976d7.png" alt="parks&pages" />
</a>
          </article>
          <article>
            <div class="card-links">
              <h2>Well Waves</h2>
              <h3>HTML, CSS, JavaScript, API, React, React-strap</h3>
              <h4><a href="https://github.com/shannonjburris/well-waves" target="_blank" rel="noreferrer">Repo Link</a></h4>
            </div>
            <a href="https://desolate-garden-53776.herokuapp.com/">
            <img src="https://user-images.githubusercontent.com/85596303/133468897-93e3bce9-8de6-4dee-8556-6ded0cd2541b.png" alt="well-waves" />
            </a>
          </article>
          <article>

            <div class="card-links">
              <h2>Weather Dashboard</h2>
              <h3>HTML/JS/CSS and Server-side APIs</h3>
              <h4><a href="https://github.com/shannonjburris/weather-dashboard" target="_blank" rel="noreferrer">Repo Link</a></h4>
            </div>
            <a href="https://shannonjburris.github.io/weather-dashboard/">
              <img src="https://raw.githubusercontent.com/shannonjburris/react-portfolio/main/Assets/Images/Screen%20Shot%202021-07-06%20at%209.09.20%20PM.png" alt="weather-dashboard" />
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
