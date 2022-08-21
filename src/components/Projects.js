import React from "react";
import letsTech from '../img/letsTech.png';

export default function Projects() {
  const icon = { width: "3rem" };
  const computer = { width: "30rem"};
  const js = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fjs-128.png&f=1&nofb=1"
      alt="JavaScript" style={icon}
    />
  );
  const css = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fcss-512.png&f=1&nofb=1"
      alt="CSS3" style={icon}
    />
  );
  const handlebars = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8ROvh9y7LAVuOHFijKEnpQHaHa%26pid%3DApi&f=1"
      alt="handlebars.js"
      class="round" style={icon}
    />
  );
  const heroku = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fheroku-logo-7.jpg&f=1&nofb=1"
      alt="heroku"
      class="round" style={icon}
    />
  );
  const sequelize = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhyunseob.github.io%2Fimages%2Fsequelizejs.png&f=1&nofb=1"
      alt="Sequelize" style={icon}
    />
  );
  const node = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js" style={icon}
    />
  );
  const express = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mementotech.in%2Fassets%2Fimages%2Ficons%2Fexpress.png&f=1&nofb=1"
      alt="express.js" style={icon}
    />
  );
  const GitHub = (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={icon} />
  );
  const go = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fgo-icon-9.png&f=1&nofb=1" style={icon}/>
  );

  return (
    <section className="container col-10 p-5" class="row" id="projects">
      <div className="container p-2" class="projectContainer">
        <h1 class="center">Projects</h1>

        <div class="containerProjects center">
          <div class="project center">
            <div className="container col-4">
              <div>
                <h4 class="title center p-3">Let's Tech About It</h4>
                <h6 class="description p-2">
                  A CMS-style blog site (similar to Wordpress) where developers
                  can publish their blog posts and comment on other developers'
                  posts as well. Implements an MVC file structure.
                </h6>
              </div>

              <div class='p-3' style={icon} id="projectTags">
                {js}
                {css}
                {handlebars}
                {heroku}
                {sequelize}
                {node}
                {express}
              </div>

              <div class='p-3' style={icon} id="projectLinks">
                <a
                  href="https://github.com/TeagrinForde/Lets-Tech-About-it-MVC-Blog-V14.0.1"
                  alt="Project on GitHub"
                  target="blank"
                >
                  {GitHub}
                </a>
                <a
                  href="https://aqueous-dawn-74635.herokuapp.com/ "
                  target="blank"
                  alt="Visit Site"
                >
                  {go}
                </a>
              </div>
            </div>

            <div class='p-5'>
              <img src={letsTech} alt="Visual of deployed site" style={computer} class='computer'/>
            </div>
          </div>
        </div>

        <h4 class="currently center">Currently working on</h4>
        <h6 class="center">
          <strong>
            Georgia Institute of Technology Full-Stack Web Development Bootcamp
          </strong>
        </h6>
        <h6 class="center">Applying and interviewing for positions</h6>
        <h6 class="center">MERN Book Search Engine</h6>
        <h6 class="center">React-Redux Store</h6>
        <h6 class="center">CK-12 Math Assessment Writer</h6>
      </div>
    </section>
  );
}
