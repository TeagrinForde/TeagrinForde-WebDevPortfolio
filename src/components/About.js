import React from "react";
import Pic from "../img/ProfilePic.jpg";

export default function About() {
  return (
    <div className="container col-10 p-5" id="about">
      <div>
        <div class="row center">
          <h1 class="question">Who is Teagrin Forde?</h1>
        </div>

        <div class="row container center">

          <div className="col-lg-3 col-sm-12 col-md-12" class='container-img-profile center col-3'>
            <img src={Pic} id="profilePic" alt="Teagrin Forde"/>
          </div>

          <div class="col-lg-6 col-sm-12 col-md-12 container AboutMe">
            <h4 class="aboutMe">
              Creative, logic-driven Full-Stack developer with strong background and
              experience in mathematics education.
            </h4>
            <div>
              I'm a life-long learner the enjoys creating cutting-edge websites
              and applications with challenging demands and visions. Project
              manager, team leader, and analytical problem-solver with top-notch
              organizational, prioritization, and scheduling soft skills.
            </div>
            <br></br>
            <div>
              I have a certificate of completion from the{" "}
              <strong class="bold">
                Georgia Institute of Technology Full-Stack Web Development
                Bootcamp
              </strong>
              , my PMP certification from Google's
              <strong class="bold"> Coursera</strong>, two Master of Education
              degrees from{" "}
              <strong class="bold">American College of Education</strong>, and a
              Bachelor of Arts degree from the{" "}
              <strong class="bold">University of South Florida</strong>.
            </div>
            <br></br>
            <div>
              I'm happiest when I'm creating, learning, exploring and improving
              my environment through collaboration, organiation, and
              problem-solving. I am currently seeking a full-time position, so
              feel free to reach out and{" "}
              <a href="#contact" class="link">say hello</a>!
            </div>
            <br></br>
            <div class="bold">Last updated August 2022</div>
          </div>          
        </div>
      </div>
    </div>
  );
}
