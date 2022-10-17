import React from "react";
import { Container } from "react-bootstrap";

export default function SkillsTools() {
  const icon = { width: "4rem" };
  return (
    <Container id="skillsTools">
      <div>
        <h1 class='center pt-5 pb-5'>Skills&Tools</h1>

        <div className="container" class="containerIcons">
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt='Bable' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='Bootstrap' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" alt='Devicon' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" alt='ESLint' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt='Git' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='GitHub' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" alt='GitLab' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt='handlbars' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt='GraphQL' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt='heroku' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='HTML5' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" style={icon}/>
          </div>
        </div>

        <div className="container" class="containerIcons">
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JavaScript' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='Jest' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt='jQuery' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fres.cloudinary.com%2Fcolinstodd-com%2Fimage%2Fupload%2Fc_fit%2Fn9qdpfw4kwsjqox0lymi.png&f=1&nofb=1&ipt=8cd07fad8a211c96e5ae5d51c1149a204e4e35710d502e17d9827cb561fdaa70&ipo=images" alt='Materialize' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongoDB' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='MySQL' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt='Node.js' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='React' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"alt='Sequelize' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg" alt='Slack' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt='Visual Studio Code' style={icon}/>
          </div>
          <div className="card" class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" alt='webpack' style={icon}/>
          </div>
        </div>
        
        <div class="pt-5">
        <h4 class="currentlyExp center">Currently exploring</h4>
        <h6 class='center'>Udemy - Data Structures and Algorithms</h6>
        <h6 class='center'>Udemy - AWS Certification</h6>
        <h6 class='center'>Python</h6>
        </div>
      </div>
    </Container>
  );
}
