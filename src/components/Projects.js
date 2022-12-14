import React from "react";
import { Container } from "react-bootstrap";
import letsTech from "../img/letsTech.png";
import jate from "../img/jate.png";
import gallivanter from "../img/gallivanter.png";
import suffer from "../img/suffer.png";
import comingSoon from "../img/comingSoon.PNG";

export default function Projects() {
  const icon = { height: "2rem" };

  const js = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fjs-128.png&f=1&nofb=1"
      alt="JavaScript"
      style={icon}
    />
  );
  const css = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fcss-512.png&f=1&nofb=1"
      alt="CSS3"
      style={icon}
    />
  );
  const handlebars = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8ROvh9y7LAVuOHFijKEnpQHaHa%26pid%3DApi&f=1"
      alt="handlebars.js"
      class="round"
      style={icon}
    />
  );
  const heroku = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fheroku-logo-7.jpg&f=1&nofb=1"
      alt="heroku"
      class="round"
      style={icon}
    />
  );
  const html = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fhtml-xxl.png&f=1&nofb=1"
      alt="HTML"
      class="round"
      style={icon}
    />
  );
  const react = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Freact-1-logo-black-and-white.png&f=1&nofb=1"
      alt="React"
      class="round"
      style={icon}
    />
  );
  const graphQL = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fgraphql-logo-png-transparent.png&f=1&nofb=1"
      alt="graphQL"
      class="round"
      style={icon}
    />
  );
  const mongo = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmpng.subpng.com%2F20190401%2Fzsf%2Fkisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg&f=1&nofb=1&ipt=32d447fdde13a40404026f3bf4846ada0d9cab094b1334ce3f64215a2b80324e&ipo=images"
      alt="MongoDB"
      class="round"
      style={icon}
    />
  );
  const sequelize = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhyunseob.github.io%2Fimages%2Fsequelizejs.png&f=1&nofb=1"
      alt="Sequelize"
      style={icon}
    />
  );
  const mySQL = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fmysql-xxl.png&f=1&nofb=1"
      alt="MySQL"
      style={icon}
    />
  );
  const node = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      style={icon}
    />
  );
  const express = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mementotech.in%2Fassets%2Fimages%2Ficons%2Fexpress.png&f=1&nofb=1"
      alt="express.js"
      style={icon}
    />
  );
  const webpack = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fwebpack-icon-logo-png-transparent.png&f=1&nofb=1"
      alt="Webpack"
      class="round"
      style={icon}
    />
  );
  const GitHub = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      style={icon}
      alt="GitHub"
    />
  );
  const go = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fgo-icon-9.png&f=1&nofb=1"
      style={icon}
      alt="Go To Site"
    />
  );

  return (
    <Container id="projects">
      <div class="row center pt-5">
        <h1 class="center p-1">Projects</h1>
      </div>

      <div class="project center row m-1 p-2">

        <div className="center col-lg-4 col-sm-12 col-md-4">
          <img src={suffer} alt="Visual of deployed site" class="computer" />
        </div>

        <div className="col-lg-6 col-sm-12 col-md-5 container p-0 m-0">
          <div>
            <h3 class="title center">Suffer</h3>
            <h6 class="description p-1">
              Suffer is a web developer's version of the arcade video game,
              Breakout, developed and published by Atari, Inc. and released in
              1976. Break your way though each level of code to earn MVP status!
              Once in the scoreboard room, type in "candy" or "space" to access
              additional games created to reflect our development throughout the
              past three months at the Gerogia Institute of Technology
              Full-Stack Development Bootcamp. This project was created using an
              Agile methodology.
            </h6>
          </div>

          <div class="p-1 container center" style={icon} id="projectTags">
            {js}
            {css}
            {html}
            {react}
            {graphQL}
            {mongo}
            {heroku}
            {sequelize}
            {node}
            {express}
          </div>

          <div class="p-3 container center" style={icon} id="projectLinks">
            <a
              href="https://github.com/TeagrinForde/Suffer"
              alt="Project on GitHub"
              target="blank"
            >
              {GitHub}
            </a>
            <a
              href="https://suffer-game-gtbootcamp.herokuapp.com/ "
              target="blank"
              alt="Visit Site"
            >
              {go}
            </a>
          </div>
        </div>
        
      </div>

      <div class="project center row m-1 p-2">
        <div className="col-lg-6 col-sm-12 col-md-5 container p-0 m-0">
          <div>
            <h3 class="title center">Let's Tech About It</h3>
            <h6 class="description p-1">
              A full-stack, CMS-style blog site (similar to Wordpress) where
              developers can publish their blog posts and comment on other
              developers' posts as well. Implements an MVC file structure.
            </h6>
          </div>

          <div class="p-1 container center" style={icon} id="projectTags">
            {js}
            {css}
            {html}
            {handlebars}
            {heroku}
            {sequelize}
            {node}
            {express}
          </div>

          <div class="p-3 container center" style={icon} id="projectLinks">
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

        <div className="center col-lg-4 col-sm-12 col-md-4">
          <img src={letsTech} alt="Visual of deployed site" class="computer" />
        </div>
      </div>

      <div class="project center row m-1 p-2">
        <div className="center col-lg-4 col-sm-12 col-md-4">
          <img
            src={gallivanter}
            alt="Visual of deployed site"
            class="computer"
          />
        </div>

        <div className="col-lg-6 col-sm-12 col-md-5 container p-0 m-0">
          <div>
            <h3 class="title center">Gallivanter</h3>
            <h6 class="description p-1">
              Gallivanter is an application that provides necessary travel
              information a user may need before planning a trip. This project
              was created using an Agile framework. My contributions included
              login authorization and authentication and overall responsive
              UI/UX design.
            </h6>
          </div>

          <div class="p-1 container center" style={icon} id="projectTags">
            {js}
            {css}
            {html}
            {handlebars}
            {mySQL}
            {heroku}
            {sequelize}
            {node}
            {express}
          </div>

          <div class="p-3 container center" style={icon} id="projectLinks">
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

      <div class="project center row m-1 p-2">
        <div className="col-lg-6 col-sm-12 col-md-5 container p-0 m-0">
          <div>
            <h3 class="title center">Just Another Text-Editor</h3>
            <h6 class="description p-1">
              JATE is an on/off-line PWA, text editor that runs in the browser
              as a single-page application that meets the PWA criteria.
              Additionally, it features a number of data persistence techniques
              that serve as redundancy in case one of the options is not
              supported by the browser, with an MVC file structure.
            </h6>
          </div>

          <div class="p-1 container center" style={icon} id="projectTags">
            {js}
            {css}
            {html}
            {heroku}
            {sequelize}
            {node}
            {express}
            {webpack}
          </div>

          <div class="p-3 container center" style={icon} id="projectLinks">
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

        <div className="center col-lg-4 col-sm-12 col-md-4">
          <img src={jate} alt="Visual of deployed site" class="computer" />
        </div>
      </div>

      <div class="project center row m-1 p-2">
        <div className="center col-lg-4 col-sm-12 col-md-4">
          <img src={comingSoon} alt='Coming Soon' class="comingSoon"/>
        </div>

        <div className="col-lg-6 col-sm-12 col-md-5 container p-0 m-0">
          <div>
            <h3 class="title center">Everest Material Handling</h3>
            <h6 class="description p-1 center">E-commerce website coming soon!</h6>
          </div>

          <div class="p-1 container center" style={icon} id="projectTags">
            {js}
            {css}
            {html}
            {react}
            {graphQL}
            {mongo}
            {heroku}
            {sequelize}
            {node}
            {express}
          </div>

          <div class="p-3 container center" style={icon} id="projectLinks">
            <a href="#" alt="Project on GitHub" target="blank">
              {GitHub}
            </a>
            <a href="#" target="blank" alt="Visit Site">
              {go}
            </a>
          </div>
        </div>
      </div>

      <h4 class="currently center p-2">Current work</h4>
      <h6 class="center title">
        Inside Systems Engineer at Uniphore
      </h6>
      <br/>
      <h6 class="center title">Everest Material Handling ~ Contract</h6>
      <h6 class="center title">Be Your Best Inc. ~ Contract</h6>
      <h6 class="center m-0">
        <a href="#myStory" alt="My Story" class="link p-5">
          Follow My Journey Here
        </a>
      </h6>
    </Container>
  );
}
