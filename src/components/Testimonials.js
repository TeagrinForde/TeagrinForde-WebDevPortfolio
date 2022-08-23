import React from "react";
import hunter from '../img/hunter.PNG';

export default function Testimonials() {
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

        <div className='col-lg-6 col-sm-12 col-md-12 container'></div>
      </div>

    </div>
  );
}
