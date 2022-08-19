import React from "react";

export default function About() {
  return (
    <div className="text-white" class="container p-5" id="about">
      <div id="center">
        <div class="row">
          <h1 class="question">Who is Teagrin Forde?</h1>
        </div>

        <div class="row p-3">
          <div className="col-3" id="profilePic" alt="Teagrin Forde"></div>
          <div class="col-6">
            <h4 class="aboutMe">
              Creative, logic-driven Full-Stack developer with background and
              experience in education.
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
              <a href="#contact" class="link">
                say hello
              </a>
              !
            </div>
            <br></br>
          </div>
          <div class="bold">Last updated August 2022</div>
        </div>
      </div>
    </div>
  );
}
