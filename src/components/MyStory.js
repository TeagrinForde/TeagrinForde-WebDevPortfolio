import React from "react";
import { Container } from "react-bootstrap";
import originalPortfolio from "../img/originalPortfolio.png";

export default function MyStory() {
  return (
    <Container id="myStory">
      <div class='row center'>
        <h1 class="center p-3">My Story</h1>
      </div>

      <div class='project text-center p-3'>
        My transition into the full-stack development first started in
        early 2022 during my fifteenth year of teaching mathematics in public
        education. Covid impacted every aspect of our lives; particularly the
        education sector. Many teachers were forced to research and utilize software and
        applications without any training, direction, guidance, or support. It
        was during this time that I decided to explore my passion for
        technology. I registered for courses through codecademy as well as
        earned PMP certification through Google's Coursera and a certificate from ISTE in AI explorations and Their Practical Use in School Environments. Having always been a life-long learner, driven problem-solver, and passionate professional; the personal and professional growth potential in the private sector was no longer something I could resist.
      </div>
      <div class='row center'>
        <div class="col-3">
        <img src={originalPortfolio} alt="Front-end First Portfolio" class="pic"/>
        </div>
        <div class="col-9 project center">
          June of 2022 I started the Georgia Institute of Technology Full-Stack Development Bootcamp where all of the skills that I have gained throughout my life were put to the test. The Bootcamp was a 12-week intensive program focused on gaining technical programming skills. In the first month, we covered Front-end languages and applications such as HTML, CSS, JavaScript, Git, GitHub, GitLab, Web APIs, third-party APIs, Web APIs, and Server-Side APIs. The second month covered Back-end languages, applications, and concepts like Node.js, OOP, Express.js, SQL, ORM, and MVC. The final month taught us Computer Science specific applications that are useful when seeking a career in full-stack development. A few of these applications included NoSQL, PWA, React, MERN, and State. 
        </div>
      </div>
    </Container>
  );
}
