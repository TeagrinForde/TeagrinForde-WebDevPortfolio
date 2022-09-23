import React from "react";
import { Container } from "react-bootstrap";
import originalPortfolio from "../img/originalPortfolio.png";

export default function MyStory() {
  const pic = { height: "5rem" };
  return (
    <Container id="myStory">
      <div class="center">
        <h1 class="center p-5">My Story</h1>
      </div>

      <div class="project text-center p-5">
        My transition into full-stack development started in early 2022 during
        my fifteenth year of teaching mathematics in public education. Covid
        impacted every aspect of our lives, particularly in the education
        sector. Many teachers were forced to research and utilize software and
        applications without training, direction, guidance, or support. During
        this time, I decided to explore my passion for technology. I registered
        for courses through Codecademy and earned PMP certification through
        Google's Coursera and a certificate from ISTE in AI explorations and
        Their Practical Use in School Environments. Having always been a
        life-long learner, driven problem-solver, and passionate professional,
        the personal and professional growth potential in the private sector was
        no longer something I could resist.
      </div>
      <div class="center p-5">
        <div class="col-3 d-flex align-items-center">
          <a
            href="https://teagrinforde.github.io/Teagrin-Forde-Portfolio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={originalPortfolio}
              alt="Front-end First Portfolio"
              class="pic"
            />
          </a>
        </div>
        <div class="col-9 project text-center p-5">
        In June of 2022, I started the Georgia Institute of Technology Full-Stack Development Bootcamp, where all the skills I have gained throughout my life were tested. The Bootcamp was a 12-week intensive program focused on gaining technical programming skills. In the first month, we covered Front-end languages and applications such as HTML, CSS, JavaScript, Git, GitHub, GitLab, Web APIs, third-party APIs, Web APIs, and Server-Side APIs. The computer and phone display to the left is a link to the site. The second month covered Back-end languages, applications, and concepts like Node.js, OOP, Express.js, SQL, ORM, and MVC. The final month taught us Computer Science specific applications that are useful when seeking a career in full-stack development. A few of these applications included NoSQL, PWA, React, MERN, and State. Towards the end of the Bootcamp, I created my new portfolio (yes… this one) to better example my current abilities. Below are links to a few projects completed throughout the Bootcamp, certifications earned, and my RESUME for you to check out. Let's build something together!
        </div>
      </div>

      <div class="docs p-5 container">
        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm1.behance.net%2Frendition%2Fmodules%2F103320749%2Fdisp%2Fb43e9f95326a27aa23fdf7773fc8c63e.png&f=1&nofb=1&ipt=e697ed5fc2b49d513ad8191bbbe43e45a9127129832f21eb6185fdb3da23ebcc&ipo=images"
              alt="Georgia Tech Bootcamp Certificate"
              style={pic}
            />
          </a>
        </div>

        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm1.behance.net%2Frendition%2Fmodules%2F103320749%2Fdisp%2Fb43e9f95326a27aa23fdf7773fc8c63e.png&f=1&nofb=1&ipt=e697ed5fc2b49d513ad8191bbbe43e45a9127129832f21eb6185fdb3da23ebcc&ipo=images"
              alt="Georgia Tech Bootcamp Certificate"
              style={pic}
            />
          </a>
        </div>

        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm1.behance.net%2Frendition%2Fmodules%2F103320749%2Fdisp%2Fb43e9f95326a27aa23fdf7773fc8c63e.png&f=1&nofb=1&ipt=e697ed5fc2b49d513ad8191bbbe43e45a9127129832f21eb6185fdb3da23ebcc&ipo=images"
              alt="Georgia Tech Bootcamp Certificate"
              style={pic}
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
