import React from "react";
import { Container } from "react-bootstrap";
import originalPortfolio from "../img/originalPortfolio.png";
import SWC from "../img/SWC.png";

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
      <div class="center row p-5">
        <div class="col-lg-3 col-md-12 col-sm-12 d-flex align-items-center center">
          <a
            href="https://teagrinforde.github.io/Teagrin-Forde-Portfolio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={originalPortfolio}
              alt="Front-end First Portfolio"
              class="pic round"
            />
          </a>
        </div>

        <div class="col-lg-9 col-md-12 col-sm-12 project text-center p-5">
          In June of 2022, I started the Georgia Institute of Technology
          Full-Stack Development Bootcamp, where all the skills I have gained
          throughout my life were tested. The Bootcamp was a 12-week intensive
          program focused on gaining technical programming skills. In the first
          month, we covered Front-end languages and applications such as HTML,
          CSS, JavaScript, Git, GitHub, GitLab, Web APIs, third-party APIs, Web
          APIs, and Server-Side APIs. The computer and phone display to the left
          (above if using mobile or tablet) is a link to the site. The second
          month covered Back-end languages, applications, and concepts like
          Node.js, OOP, Express.js, SQL, ORM, and MVC. The final month taught us
          Computer Science specific applications that are useful when seeking a
          career in full-stack development. A few of these applications included
          NoSQL, PWA, React, MERN, and State. Towards the end of the Bootcamp, I
          created my new portfolio (yes… this one) to better example my current
          abilities. Below are links to a few projects completed throughout the
          Bootcamp, certifications earned, and my RESUME for you to check out.
          Let's build something together!
        </div>
      </div>

      <div class="docs p-5 d-flex center container">
        <div class="center col-lg-2 col-md-2 col-sm-12">
          <a href="https://drive.google.com/file/d/18rs8H1fNn0Y-59YAz383Kj_bZv-HmO7x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm1.behance.net%2Frendition%2Fmodules%2F103320749%2Fdisp%2Fb43e9f95326a27aa23fdf7773fc8c63e.png&f=1&nofb=1&ipt=e697ed5fc2b49d513ad8191bbbe43e45a9127129832f21eb6185fdb3da23ebcc&ipo=images"
              alt="Georgia Tech Full-Stack Bootcamp Certificate"
              style={pic}
              class="round"
            />
          </a>
        </div>

        <div class="center col-lg-2 col-md-2 col-sm-12">
          <a href="https://drive.google.com/file/d/1awW__m56U4GKzaz-3Xo_VwKt8LYeExWh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa0.awsstatic.com%2Flibra-css%2Fimages%2Flogos%2Faws_logo_smile_1200x630.png&f=1&nofb=1&ipt=12c54d12a79a5987d9999b164ead6103d86f041cd4d8809ab13a722ff3deefad&ipo=images"
              alt="Udemy ~ AWS Cloud Practitioner Certification"
              style={pic}
              class="round"
            />
          </a>
        </div>

        <div class="center col-lg-2 col-md-2 col-sm-12">
          <a href="https://drive.google.com/file/d/1KWgnZV6XInklckgP1n0nXG5_vcdUqe0y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fappdodo.com%2Fuploads%2Fimages%2Fapps%2Fudemy-online-courses-icon.png&f=1&nofb=1&ipt=4f20725e5649863f33f53826f302e5f0c7beeca408ad6a4bb2edf6218fba8b54&ipo=images"
              alt="Udemy ~ Data Structures and Algorithms Certification"
              style={pic}
              class="round"
            />
          </a>
        </div>

        <div class="center col-lg-2 col-md-2 col-sm-12">
          <a
            href="https://drive.google.com/file/d/1xWC6RdNdG_GEA--qATNrKKgnk-wzBfoF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzeen.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fcoursera.png&f=1&nofb=1&ipt=fa94dc4d8a977d990b288e7fe95cd6716a0bc18eb34f2d1b80f6f3020485d1b4&ipo=imagess"
              alt="Coursera PMP Certificate"
              style={pic}
              class="round"
            />
          </a>
        </div>

        <div class="center col-lg-2 col-md-2 col-sm-12">
          <a
            href="https://drive.google.com/file/d/1dGzupb1i8I6tEamtKYnZ7w_wqkU822-r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kumiteclassic.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fresume-icon-png-1.png&f=1&nofb=1&ipt=686cbce06a8a0671bd5795418cfdffa140e33ffb01e390f8b442172226189ab8&ipo=images"
              alt="Teagrin Forde, PMP Resume"
              style={pic}
              class="round"
            />
          </a>
        </div>
      </div>

      <h2 class="center row pt-4 pb-4">Additional Projects</h2>

      <h6 class="center">Front-end Projects</h6>
      <div class="p-0 m-0 d-flex center">
        <div class="row center p-5">
          <div class="d-flex center col-lg-1 col-md-2 col-sm-12 p-1">
            <a
              href="https://teagrinforde.github.io/wellness-project/"
              target="blank"
              class="center"
            >
              <img src={SWC} alt="Sunshine Wellness Center" class="extra" />
            </a>
          </div>
          <div class="d-flex center col-lg-5 col-md-9 col-sm-12 p-1">
            <p class="text-white p-1">
              A front-end mental health website that provides a daily check-up
              quiz created using JavaScript and stored on the client side. The
              site utilizes two server-side APIs connecting to a personal health
              widget on the Health.org website and a slideshow of dog photos to
              help relieve stress, with a responsive and polished UI design.
              This project was created using an Agile framework, structured with
              a Kanban board, developed through a User Story, and presented
              through a PowerPoint presentation. Additional technologies/tools
              include: Bootstrap, GoogleFonts, jQuery, jQueryUI, and Moment.js.
            </p>
          </div>

          <div class="d-flex center col-lg-3 col-md-5 col-sm-12 p-1">
            <a
              href="https://teagrinforde.github.io/TFordeWeatherDashboard/"
              target="blank"
              class="center"
            >
              <img
                src="https://user-images.githubusercontent.com/101753839/178364173-d71a6353-8750-498b-ae18-5eb4a6224816.png"
                alt="Weather Dashboard"
                class="extra"
              />
            </a>
          </div>
          <div class="d-flex center col-lg-3 col-md-6 col-sm-12 p-1">
            <p class="text-white p-1">
              A front-end, interactive dashboard that allows users to look up
              the weekly weather information in any city around the United
              States to determine the current temperature, wind speed, humidty,
              and UV index as well as temperature, wind speed, and humidity for
              the next five days. This information is pulled directly from the
              server-side, third-party Open Weather API and utilizes local
              storage.
            </p>
          </div>
        </div>
      </div>

      <h6 class="center">Back-end Projects</h6>
      <div class="p-0 m-0 d-flex center">
        <div class="row center p-3 pb-5">
          <div class="d-flex center col-lg-4 col-md-9 col-sm-12 p-1 container">
            <p class="text-white p-1">
              An e-commerce back-end site that enables a company to search
              through their database to find all pertinent information regarding
              their products. This site takes a working Express.js API and configures it to use Sequelize to interact with a MySQL database. Click on the picture to head to my
              demonstration video.
            </p>
          </div>
          <div class="d-flex center col-lg-1 col-md-2 col-sm-12 p-1 container">
            <a href="https://drive.google.com/file/d/1XbG6iSZe4a4S4TODgoAJkuljcP4bRAEi/view" target="blank" class="center">
              <img src="https://user-images.githubusercontent.com/101753839/181265905-c9e3d13a-0326-4075-9d78-bc3d7933590d.png" alt="Tech at Your Step e-commerce" class="extra" />
            </a>
          </div>

          <div class="d-flex center col-lg-4 col-md-9 col-sm-12 p-1 container">            
            <p class="text-white p-1">
              An API for a social network web application where users can share
              their thoughts, react to friends' thoughts, and create a friend
              list. Express.js was used for routing, MongoDB as the NoSQL
              database, and the Mongoose ODM. Click on the picture to head to my
              demonstration video.
            </p>
          </div>
          <div class="d-flex center col-lg-1 col-md-2 col-sm-12 p-1 container">
            <a href="https://drive.google.com/file/d/1XbG6iSZe4a4S4TODgoAJkuljcP4bRAEi/view" target="blank" class="center">
              <img src="https://user-images.githubusercontent.com/101753839/181265905-c9e3d13a-0326-4075-9d78-bc3d7933590d.png" alt="Social Network API" class="extra" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
