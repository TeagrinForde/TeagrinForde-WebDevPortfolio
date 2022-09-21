import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import hunter from "../img/hunter.PNG";
import jules from "../img/jules.PNG";
import paulo from "../img/paulo.PNG";
import jung from '../img/jung.PNG';
import openQ from '../img/openQ.png';
import closeQ from '../img/closeQ.png';

export default function Testimonials() {
  return (
    <Container id="testimonials">
      <Row>
        <h1 class="center top">Testimonials</h1>
      </Row>

      <Row className="p-4 center">
        <div className="col-lg-8 col-sm-10 col-md-5">
          <div>
          <img src={openQ} alt='Quote' class='quote'/>
          </div>
          <div class="message">
            Compassionate, innovative, a leader. Teagrin holds all the values
            that a company needs to grow their products to the next level.
            During her time here at the Full Stack Web Development Program at
            Georgia Tech, Teagrin took on the initiatives and processes commonly
            found in leaders. She bootstrapped multiple study sessions and led
            students in critical ways to share and learn this new skillset in a
            span of three months.
            <br />
            As her instructor, I had the privilege to see her in action in not
            just a leadership capacity, but also her growth as a software
            engineer. Ever so curious, Teagrin would always ask important
            questions to help direct the class conversations into the next
            steps, allowing for her fellow classmates to learn from the
            discussions taking place. This all culminated with amazing projects
            that she helped to create, highlighting her ever growing technical
            skills.
            <br />
            With all of these in mind, I can only give the strongest of
            recommendations about Teagrin. Any company would be lucky to have
            her and she will be an amazing asset to the company.
          </div>
          <div class='float-end'>
          <img src={closeQ} alt='Quote' class='quote'/>
          </div>
        </div>

        <div className="col-lg-3 col-sm-12 col-md-5 pt-5">
          <div class="center">
            <img src={jung} alt="Junghoon Yoon" class="testPeep" />
          </div>
          <h2 class="center name">Junghoon Yoon</h2>
          <h5 class="text-center p-2">
            Lead Instructor at Georgia Technical Institute of Technology and 2U
          </h5>
        </div>
      </Row>

      <Row className="p-4 center">
        <div className="col-lg-3 col-sm-12 col-md-5 pt-3">
          <div class="center">
            <img src={hunter} alt="Hunter Padgett" class="testPeep" />
          </div>
          <h2 class="center name">Hunter Padgett</h2>
          <h5 class="text-center p-2">Full-Stack Web Developer</h5>
        </div>

        <div className="col-lg-8 col-sm-10 col-md-5">
        <div>
          <img src={openQ} alt='Quote' class='quote'/>
          </div>
          <div class="message">
            Working with Teagrin is always a pleasure. She's always the hardest
            worker in the room and is a great collaborator. I would recommend
            Teagrin to any team because she is adaptable, a quick learner, and a
            fantastic listener!
          </div>
          <div class='float-end'>
          <img src={closeQ} alt='Quote' class='quote'/>
          </div>
        </div>
      </Row>

      <Row className="p-4 center">
        <div className="col-lg-8 col-sm-10 col-md-5">
        <div>
          <img src={openQ} alt='Quote' class='quote'/>
          </div>
          <div class="message">
            Teagrin is an enthusiastic, hard-working, driven individual. Her
            willingness to collaborate makes her the perfect teammate. She has
            helped me grow as an individual and in my coding career. Teagrin is
            an amazing asset in every situation she dives into!
          </div>
          <div class='float-end'>
          <img src={closeQ} alt='Quote' class='quote'/>
          </div>
        </div>

        <div className="col-lg-3 col-sm-12 col-md-5 pt-2">
          <div class="center">
            <img src={jules} alt="Jules Franklin" class="testPeep" />
          </div>
          <h2 class="center name">Jules Franklin</h2>
          <h5 class="text-center p-2">Full-Stack Web Developer</h5>
        </div>
      </Row>

      <Row className="p-4 center">
        <div className="col-lg-3 col-sm-12 col-md-5">
          <div class="center">
            <img src={paulo} alt="Paulo Condori" class="testPeep" />
          </div>
          <h2 class="center name">Paulo Condori</h2>
          <h5 class="text-center p-2">Full-Stack Web Developer</h5>
        </div>

        <div className="col-lg-8 col-sm-10 col-md-5">
        <div>
          <img src={openQ} alt='Quote' class='quote'/>
          </div>
          <div class="message">
            A leader, fearless, persistent, and intelligent. Those words are
            what comes to mind when I think of Teagrin Forde. I had the pleasure
            of meeting her during our coding bootcamp. While many were silent
            and to themselves at the beginning of the course, Teagrin was not.
            She immediately wanted to collaborate with fellow classmates so she
            and her classmates could grow as Full stack developers. Anybody
            would be lucky to have her in their team.
          </div>
          <div class='float-end'>
          <img src={closeQ} alt='Quote' class='quote'/>
          </div>
        </div>
      </Row>
    </Container>
  );
}
