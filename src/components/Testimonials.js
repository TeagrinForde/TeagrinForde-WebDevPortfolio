import React from "react";
import hunter from '../img/hunter.PNG';

export default function Testimonials() {
  const quote = { width: "4rem"};
  const openQ = (
    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2FQ%2FB%2FT%2FU%2FY%2Ff%2Fpurple-quotation-mark-hi.png&f=1&nofb=1' style={quote}/>
  );
  const closeQ = (
    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fx%2FN%2Fz%2F7%2Fe%2Fc%2Fpurple-quotation-mark-right-hi.png&f=1&nofb=1' class='float-right' style={quote}/>
  );
  return (
    <div className="container col-10 p-5" id="testimonials">
      <div class="row center">
        <h1 class="center p-3">Testimonials</h1>
      </div>

      <div class='testimonial row center p-5'>
        <div className='col-lg-3 col-sm-12 col-md-12 container'>
          <div class="center">
            <img src={hunter} alt='Hunter Padgett' class='testPeep'/>
            </div>
          <div class="center">Hunter Padgett</div>
          <div class="center">Full-Stack Web Developer</div>
        </div>

        <div className='col-lg-5 col-sm-12 col-md-12 container'>
          <div>{openQ}</div>
          <div class="message">Working with Teagrin is always a pleasure. She's always the hardest worker in the room and is a great collaborator. I would recommend Teagrin to any team because she is adaptable, a quick learner, and a fantastic listener!</div>
          <div>{closeQ}</div>
        </div>
      </div>

    </div>
  );
}
