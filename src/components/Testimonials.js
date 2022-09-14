import React from "react";
import hunter from "../img/hunter.PNG";
import jules from "../img/jules.PNG";
import paulo from "../img/paulo.PNG";
import jung from '../img/jung.PNG'

export default function Testimonials() {
  const quote = { width: "3rem" };
  const openQ = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2FQ%2FB%2FT%2FU%2FY%2Ff%2Fpurple-quotation-mark-hi.png&f=1&nofb=1"
      alt="open quote"
      style={quote}
    />
  );
  const closeQ = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fx%2FN%2Fz%2F7%2Fe%2Fc%2Fpurple-quotation-mark-right-hi.png&f=1&nofb=1"
      alt="close quote"
      style={quote}
    />
  );
  return (
    <div className="container col-10 m-0 p-0" id="testimonials">
      <div class="row center">
        <h1 class="center title top">Testimonials</h1>
      </div>

      <div class="testimonial row">
        <div className="col-lg-6 col-sm-12 col-md-12 container p-0">
          <div>{openQ}</div>
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
          <div className="text-end">{closeQ}</div>
        </div>

        <div className="col-lg-3 col-sm-12 col-md-12 container">
          <div class="center">
            <img src={jung} alt="Junghoon Yoon" class="testPeep" />
          </div>
          <h2 class="center name">Junghoon Yoon</h2>
          <h5 class="text-center">
            Lead Instructor at Georgia Technical Institute of Technology and 2U
          </h5>
        </div>
      </div>

      <div class="testimonial row center p-5">
        <div className="col-lg-3 col-sm-12 col-md-12 container">
          <div class="center">
            <img src={hunter} alt="Hunter Padgett" class="testPeep" />
          </div>
          <h2 class="center name">Hunter Padgett</h2>
          <h5 class="text-center">Full-Stack Web Developer</h5>
        </div>

        <div className="col-lg-5 col-sm-12 col-md-12 container">
          <div>{openQ}</div>
          <div class="message">
            Working with Teagrin is always a pleasure. She's always the hardest
            worker in the room and is a great collaborator. I would recommend
            Teagrin to any team because she is adaptable, a quick learner, and a
            fantastic listener!
          </div>
          <div className="text-end">{closeQ}</div>
        </div>
      </div>

      <div class="testimonial row center p-5">
        <div className="col-lg-5 col-sm-12 col-md-12 container">
          <div>{openQ}</div>
          <div class="message">
            Teagrin is an enthusiastic, hard-working, driven individual. Her
            willingness to collaborate makes her the perfect teammate. She has
            helped me grow as an individual and in my coding career. Teagrin is
            an amazing asset in every situation she dives into!
          </div>
          <div className="text-end">{closeQ}</div>
        </div>

        <div className="col-lg-3 col-sm-12 col-md-12 container">
          <div class="center">
            <img src={jules} alt="Jules Franklin" class="testPeep" />
          </div>
          <h2 class="center name">Jules Franklin</h2>
          <h5 class="text-center">Full-Stack Web Developer</h5>
        </div>
      </div>

      <div class="testimonial row center p-5">
        <div className="col-lg-3 col-sm-12 col-md-12 container">
          <div class="center">
            <img src={paulo} alt="Paulo Condori" class="testPeep" />
          </div>
          <h2 class="center name">Paulo Condori</h2>
          <h5 class="text-center">Full-Stack Web Developer</h5>
        </div>

        <div className="col-lg-5 col-sm-12 col-md-12 container">
          <div>{openQ}</div>
          <div class="message">
            A leader, fearless, persistent, and intelligent. Those words are
            what comes to mind when I think of Teagrin Forde. I had the pleasure
            of meeting her during our coding bootcamp. While many were silent
            and to themselves at the beginning of the course, Teagrin was not.
            She immediately wanted to collaborate with fellow classmates so she
            and her classmates could grow as Full stack developers. Anybody
            would be lucky to have her in their team.
          </div>
          <div className="text-end">{closeQ}</div>
        </div>
      </div>
    </div>
  );
}
