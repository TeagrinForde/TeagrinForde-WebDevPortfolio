import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const icon = { width: "5rem" };
    const [state, handleSubmit] = useForm("xrgdgwve");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
        <section className='container' class='row' id='contact'>
        <h1>Get In Touch</h1>
        <div className='container row'>
            <div className='container col-3'>
                <h6>Like the page? Want to say hello, ask for my resume or see if we can build comethign amazing together? I'd Love to hear from you!</h6>
                <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
                

            </div>
        </div>

        </section>
    );
};