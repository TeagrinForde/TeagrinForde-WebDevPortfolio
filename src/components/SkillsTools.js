import React from "react";
import { Container } from "react-bootstrap";

export default function SkillsTools() {
  const icon = { width: "4rem" };
  return (
    <Container id="skillsTools">
      <div>
        <h1 class='center pt-5 mt-5'>Skills&Tools</h1>

        <div className="container" class="containerIcons">
          <div className="card" class="icon" alt='Bable' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt='Bable'/>
          </div>
          <div className="card" class="icon" alt='Bootstrap' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt='CSS3' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='Bootstrap'/>
          </div>
          <div className="card" class="icon" alt='Devicon' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" alt='Devicon'/>
            <p class="iconName">Devicon</p>
          </div>
          <div className="card" class="icon" alt='ESLint' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" alt='ESLint' />
          </div>
          <div className="card" class="icon" alt='git' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt='Git'/>
          </div>
          <div className="card" class="icon" alt='GitHub' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='GitHub'/>
          </div>
          <div className="card" class="icon" alt='GitLab' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" alt='GitLab'/>
          </div>
          <div className="card" class="icon" alt='handlbars' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt='handlbars'/>
          </div>
          <div className="card" class="icon" alt='GraphQL' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt='GraphQL'/>
          </div>
          <div className="card" class="icon" alt='heroku' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt='heroku'/>
          </div>
          <div className="card" class="icon" alt='HTML5' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='HTML5'/>
          </div>
        </div>

        <div className="container" class="containerIcons">
          <div className="card" class="icon" alt='JavaScript' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JavaScript'/>
          </div>
          <div className="card" class="icon" alt='Jest' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='Jest'/>
          </div>
          <div className="card" class="icon" alt='jQuery' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt='jQuery'/>
          </div>
          <div className="card" class="icon" alt='mongoDB' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongoDB'/>
          </div>
          <div className="card" class="icon" alt='MySQL' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='MySQL'/>
          </div>
          <div className="card" class="icon" alt='Node.js' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt='Node.js' />
          </div>
          <div className="card" class="icon" alt='npm' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm'/>
          </div>
          <div className="card" class="icon" alt='React' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='React'/>
          </div>
          <div className="card" class="icon" alt='Sequelize' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"alt='Sequelize' />
          </div>
          <div className="card" class="icon" alt='slack' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg" alt='Slack'/>
          </div>
          <div className="card" class="icon" alt='Visual Studio Code' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt='Visual Studio Code'/>
          </div>
          <div className="card" class="icon" alt='webpack' style={icon}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" alt='webpack'/>
          </div>
        </div>

        <h4 class="currently center">Currently exploring</h4>
        <h6 class='center'>Java</h6>
        <h6 class='center'>AWS</h6>
        <h6 class='center'>Python</h6>
      </div>
    </Container>
  );
}
