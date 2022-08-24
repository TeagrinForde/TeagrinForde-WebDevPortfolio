import React from "react";
import letsTech from '../img/letsTech.png';
import jate from '../img/jate.png';
import gallivanter from '../img/gallivanter.PNG';

export default function Projects() {
  const icon = { width: "2rem"};

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
  const html = (
  <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fhtml-xxl.png&f=1&nofb=1' alt='HTML' class='round' style={icon}/> 
  );
  const react = (
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Freact-1-logo-black-and-white.png&f=1&nofb=1' atl='React' class='round' style={icon}/>
  );
  const graphQL = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fgraphql-logo-png-transparent.png&f=1&nofb=1" atl="graphQL" class='round' style={icon}/>
  );
  const mongo = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetdrawings.com%2Ffree-icon%2Fmongodb-icon-59.jpg&f=1&nofb=1" alt='MongoDB' class='round' style={icon}/>
  );
  const sequelize = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhyunseob.github.io%2Fimages%2Fsequelizejs.png&f=1&nofb=1"
      alt="Sequelize" style={icon}
    />
  );
  const mySQL = (
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fmysql-xxl.png&f=1&nofb=1' alt='MySQL' style={icon}/>
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
  const webpack = (
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fwebpack-icon-logo-png-transparent.png&f=1&nofb=1' alt='Webpack' class='round' style={icon}/>
  );
  const GitHub = (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={icon} />
  );
  const go = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fgo-icon-9.png&f=1&nofb=1" style={icon}/>
  );
  const comingSoon = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F404%2F406%2Foriginal%2Fpurple-coming-soon-neon-icon-vector.jpg&f=1&nofb=1" alt='Coming Soon!' class="computer"/>
  );

  return (
    <div className="container p-2" id="projects">

        <div class='row center'>
        <h1 class="center p-3">Projects</h1>
        </div>

          <div class="project row center m-5 p-2">

            <div className="col-lg-5 col-sm-12 col-md-12 container"> 
              <div>
                <h3 class="title center">Let's Tech About It</h3>
                <h6 class="description p-3">
                  A full-stack, CMS-style blog site (similar to Wordpress) where developers
                  can publish their blog posts and comment on other developers'
                  posts as well. Implements an MVC file structure.
                </h6>
              </div>

              <div class='p-1 container center' style={icon} id="projectTags">
                {js}  
                {css}  
                {handlebars}
                {heroku}
                {sequelize}
                {node}
                {express}
              </div>

              <div class='p-3 container center' style={icon} id="projectLinks">
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

            <div className='col-lg-5 col-sm-12 col-md-12' class='col-6 center p-2'>
              <img src={letsTech} alt="Visual of deployed site" class='computer'/>
            </div>

          </div>

          <div class="project row center m-5 p-2">

            <div className='col-lg-5 col-sm-12 col-md-12' class='col-6 center p-2'>
              <img src={gallivanter} alt="Visual of deployed site" class='computer'/>
            </div>

            <div className="col-lg-5 col-sm-12 col-md-12 container"> 
              <div>
                <h3 class="title center">Gallivanter</h3>
                <h6 class="description p-3">
                Gallivanter is an application that provides necessary travel information a user may need before planning a trip. This project was created using an Agile framework. My contributions included login authorization and authentication and overall responsive UI/UX design.
                </h6>
              </div>

              <div class='p-1 container center' style={icon} id="projectTags">
                {js}  
                {css}  
                {handlebars}
                {mySQL}
                {heroku}
                {sequelize}
                {node}
                {express}
              </div>

              <div class='p-3 container center' style={icon} id="projectLinks">
                <a
                  href="https://github.com/TeagrinForde/Gallivanter"
                  alt="Project on GitHub"
                  target="blank"
                >
                  {GitHub}
                </a>
                <a
                  href="https://quiet-eyrie-99473.herokuapp.com/ "
                  target="blank"
                  alt="Visit Site"
                >
                  {go}
                </a>
              </div>
            </div>

          </div>

          <div class="project row center m-5 p-2">

            <div className="col-lg-5 col-sm-12 col-md-12 container"> 
              <div>
                <h3 class="title center">Just Another Text-Editor</h3>
                <h6 class="description p-3">
                JATE is an on/off-line PWA, text editor that runs in the browser as a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, with an MVC file structure.
                </h6>
              </div>

              <div class='p-1 container center' style={icon} id="projectTags">
                {js}  
                {css}
                {html}  
                {heroku}
                {sequelize}
                {node}
                {express}
                {webpack}
              </div>

              <div class='p-3 container center' style={icon} id="projectLinks">
                <a
                  href="https://github.com/TeagrinForde/PWA-Notes-Code-V19.0.1"
                  alt="Project on GitHub"
                  target="blank"
                >
                  {GitHub}
                </a>
                <a
                  href="https://jate-tf.herokuapp.com/ "
                  target="blank"
                  alt="Visit Site"
                >
                  {go}
                </a>
              </div>
            </div>

            <div className='col-lg-5 col-sm-12 col-md-12' class='col-6 center p-2'>
              <img src={jate} alt="Visual of deployed site" class='computer'/>
            </div>

          </div>

          <div class="project row center m-5 p-2">

            <div className='col-lg-5 col-sm-12 col-md-12' class='col-6 center p-2'>
              {comingSoon}
            </div>

            <div className="col-lg-5 col-sm-12 col-md-12 container"> 
              <div>
                <h3 class="title center">Interactive MERN Stack SPA</h3>
                <h6 class="description p-3 center">
                COMING SOON!
                </h6>
              </div>

              <div class='p-1 container center' style={icon} id="projectTags">
                {js}  
                {css}  
                {react}
                {graphQL}
                {mongo}
                {heroku}
                {sequelize}
                {node}
                {express}
              </div>

              <div class='p-3 container center' style={icon} id="projectLinks">
                <a
                  href="#"
                  alt="Project on GitHub"
                  target="blank"
                >
                  {GitHub}
                </a>
                <a
                  href="# "
                  target="blank"
                  alt="Visit Site"
                >
                  {go}
                </a>
              </div>
            </div>

          </div>

        <h4 class="currently center p-4">Currently working on</h4>
        <h6 class="center">
          <strong>
            Georgia Institute of Technology Full-Stack Web Development Bootcamp
          </strong>
        </h6>
        <h6 class="center">Applying and interviewing for development positions</h6>
        <h6 class="center">MERN Book Search Engine</h6>
        <h6 class="center">React-Redux Store</h6>
        <h6 class="center">CK-12 Math Assessment Writer</h6>
        <h6 class="center">
          <a href='#myStory' alt='My Story' class="link">
          Follow My Journey Here</a></h6>
    </div>
  );
}
