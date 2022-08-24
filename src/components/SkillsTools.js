import React from "react";

export default function SkillsTools() {
  const icon = { width: "4rem" };
  return (
    <section className="container col-10 p-4" class="row" id="skillsTools">
      <div className="container p-5" class="stContainer">
        <h1 class='center'>Skills&Tools</h1>

        <div className="container" class="containerIcons">
          <div className="card" class="icon" alt='Bable' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
          </div>
          <div className="card" class="icon" alt='Bootstrap' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='CSS3' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='Devicon' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
            <p class="iconName">Devicon</p>
          </div>
          <div className="card" class="icon" alt='ESLint' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='git' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='GitHub' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='GitLab' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='handlbars' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='GraphQL' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='heroku' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='HTML5' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
          </div>
        </div>

        <div className="container" class="containerIcons">
          <div className="card" class="icon" alt='JavaScript' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </div>
          <div className="card" class="icon" alt='Jest' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          </div>
          <div className="card" class="icon" alt='jQuery' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='mongoDB' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='MySQL' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='Node.js' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='npm' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='React' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='Sequelize' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='slack' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='Visual Studio Code' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='webpack' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
          </div>
        </div>

        <h4 class="currently center">Currently exploring</h4>
        <h6 class='center'>MERN & State</h6>
        <h6 class='center'>AWS</h6>
        <h6 class='center'>Python</h6>
      </div>
    </section>
  );
}
