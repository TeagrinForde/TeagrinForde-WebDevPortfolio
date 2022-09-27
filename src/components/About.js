import React from "react";
import { Container } from "react-bootstrap";
import Pic from "../img/ProfilePic.jpg";

export default function About() {
  return (
    <Container id="about">
      <div class="pt-5">
        <div class="row center">
          <h1 class="aboutMe">Who is Teagrin Forde?</h1>
        </div>

        <div class="row container">

          <div class="center col-lg-3 col-sm-12 col-md-3">
            <img src={Pic} id="profilePic" alt="Teagrin Forde"/>
          </div>

          <div class="col-lg-7 col-sm-12 col-md-9 container m-0 p-0">
            <h4 class="aboutMe">
              Creative, logic-driven Full-Stack developer with strong background and
              experience in mathematics education.
            </h4>
            <div>
              I'm a life-long learner that enjoys creating cutting-edge websites
              and applications with challenging demands and visions. Project
              manager, team leader, or individual contributor that is an analytical problem-solver with top-notch
              organizational, prioritization, and scheduling skills.
            </div>
            <br></br>
            <div>
              <h5>Certifications:</h5>
              <ul>
                <li><strong class="bold">
                Georgia Institute of Technology Full-Stack Web Development
                Bootcamp
              </strong></li>
              <li>PMP Certification from Google's
              <strong class="bold"> Coursera</strong></li>
              <li>Artificial Intellligence Explorations and their Practical use in School Environments from General Motor's <strong class="bold"> International Society for Technology in Education</strong> (ISTE).</li>
              </ul>
              <br></br>
              <h5>Education:</h5>
              <ul>
                <li>Master of Education in Curriculum Instruction from {" "}<strong class="bold">American College of Education</strong></li>
                <li>Master of Education in Educational Leadership from {" "}<strong class="bold">American College of Education</strong></li>
                <li>Bachelor of Arts degree from {" "}<strong class="bold">University of South Florida</strong></li>
              </ul>
              </div>

            <br></br>
            <div>
              I thrive when I'm creating, learning, exploring and improving
              my environment through collaboration, organiation, and
              problem-solving. I am currently seeking a full-time position, so
              feel free to reach out and{" "}
              <a href="#contact" class="link" alt='Contact Me'>say hello</a>!
            </div>
            <br></br>
            <div class="bold">Last updated September 2022</div>
          </div>          
        </div>
      </div>
    </Container>
  );
}
