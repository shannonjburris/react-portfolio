import React from 'react';

export default function Portfolio() {
  return (
    <div class="body">
      <h1 id="work">Portfolio</h1>
      <div class="flex-row">
        <div class="left">
        </div>
        <div class="content" id="work-content">
          <article>

            <div class="card-links">
              <h2>Parks & Pages</h2>
              <h3>HTML/JS/CSS and Server-side APIs</h3>
              <h4><a href="https://github.com/RLAQUEA/project-1" target="_blank" rel="noreferrer">Repo Link</a></h4>
            </div>
              <img src="./Assets/images/125324077-875c8680-e30d-11eb-9109-51b1d29976d7.png" alt="parks&pages" />
          
                </article>
            <article>
              <div class="card-links">
                <h2>The Clean Water Project</h2>
                <h3>JavaScript/Handlebars/Node and Multer S3</h3>
                <h4><a href="https://github.com/shannonjburris/Clean_water_project" target="_blank" rel="noreferrer">Repo Link</a></h4>
              </div>
              <a href="https://github.com/shannonjburris/day-planner">
                <img src="./Assets/images/Screen Shot 2021-08-09 at 5.17.31 PM.png" alt="Clean_water_project" />
                </a>
            </article>
              <article>
                <div class="card-links">
                  <h2>Speed Quiz</h2>
                  <h3>JavaScript/CSS</h3>
                  <h4><a href="https://github.com/shannonjburris/quiz-game" target="_blank" rel="noreferrer">Repo Link</a></h4>
                </div>
                  <img src="./Assets/images/Screen Shot 2021-06-29 at 10.50.01 PM.png" alt="speed-quiz" />
                
                </article>
                <article>

                  <div class="card-links">
                    <h2>Weather Dashboard</h2>
                    <h3>HTML/JS/CSS and Server-side APIs</h3>
                    <h4><a href="https://github.com/shannonjburris/weather-dashboard" target="_blank" rel="noreferrer">Repo Link</a></h4>
                  </div>
                  <a href="https://shannonjburris.github.io/weather-dashboard/">
                    <img src="./Assets/images/Screen Shot 2021-07-06 at 9.09.20 PM.png" alt="weather-dashboard" />
                </a>
            </article>
                  <article>
                    <div class="card-links">
                      <h2>Password Generator</h2>
                      <h3>JavaScript</h3>
                      <h4 class="links"><a href="https://github.com/shannonjburris/password-generator" target="_blank" rel="noreferrer" >Repo Link</a></h4>
                    </div>
                    <a href="https://shannonjburris.github.io/password-generator/">
                      <img src="./Assets/images/Screen Shot 2021-06-24 at 9.37.11 PM.png" alt="password-generator" />
                    </a>
                </article>
            </div>
        </div>
    </div>
  );
}
