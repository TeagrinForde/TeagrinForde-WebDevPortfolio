import React from "react";
import hunter from '../img/hunter.PNG';
import jules from '../img/jules.PNG';
import paulo from '../img/paulo.PNG';

export default function Testimonials() {
  const quote = { width: "4rem"};
  const openQ = (
    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2FQ%2FB%2FT%2FU%2FY%2Ff%2Fpurple-quotation-mark-hi.png&f=1&nofb=1' alt='open quote' style={quote}/>
  );
  const closeQ = (
    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fx%2FN%2Fz%2F7%2Fe%2Fc%2Fpurple-quotation-mark-right-hi.png&f=1&nofb=1' alt='close quote' style={quote}/>
  );
  return (
    <div className="container col-10 p-5" id="testimonials">
      <div class="row center">
        <h1 class="center title p-3">Testimonials</h1>
      </div>

      <div class='testimonial row center p-5'>
        <div className='col-lg-3 col-sm-12 col-md-12 container'>
          <div class="center">
            <img src={hunter} alt='Hunter Padgett' class='testPeep'/>
            </div>
          <h2 class="center title">Hunter Padgett</h2>
          <h5 class="center title">Full-Stack Web Developer</h5>
        </div>

        <div className='col-lg-5 col-sm-12 col-md-12 container'>
          <div>{openQ}</div>
          <div class="message">Working with Teagrin is always a pleasure. She's always the hardest worker in the room and is a great collaborator. I would recommend Teagrin to any team because she is adaptable, a quick learner, and a fantastic listener!</div>
          <div className='text-end'>{closeQ}</div>
        </div>
      </div>

      <div class='testimonial row center p-5'>
        <div className='col-lg-5 col-sm-12 col-md-12 container'>
          <div>{openQ}</div>
          <div class="message">Teagrin is an enthusiastic, hard-working, driven individual. Her willingness to collaborate makes her the perfect teammate. She has helped me grow as an individual and in my coding career. Teagrin is an amazing asset in every situation she dives into!</div>
          <div className='text-end'>{closeQ}</div>
        </div>

        <div className='col-lg-3 col-sm-12 col-md-12 container'>
          <div class="center">
            <img src={jules} alt='Jules Franklin' class='testPeep'/>
            </div>
          <h2 class="center title">Jules Franklin</h2>
          <h5 class="center title">Full-Stack Web Developer</h5>
        </div>
      </div>

      <div class='testimonial row center p-5'>
        <div className='col-lg-3 col-sm-12 col-md-12 container'>
          <div class="center">
            <img src={paulo} alt='Paulo Condori' class='testPeep'/>
            </div>
          <h2 class="center title">Paulo Condori</h2>
          <h5 class="center title">Full-Stack Web Developer</h5>
        </div>

        <div className='col-lg-5 col-sm-12 col-md-12 container'>
          <div>{openQ}</div>
          <div class="message">A leader, fearless, persistent, and intelligent. Those words are what comes to mind when I think of Teagrin Forde. I had the pleasure of meeting her during our coding bootcamp. While many were silent and to themselves at the beginning of the course, Teagrin was not. She immediately wanted to collaborate with fellow classmates so she and her classmates could grow as Full stack developers. Anybody would be lucky to have her in their team.</div>
          <div className='text-end'>{closeQ}</div>
        </div>
      </div>

    </div>
  );
}
