import React, { useState } from "react";

export default function Contact() {
  const icon = { width: "3rem" };
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  const [submitState, setSubmitState] = useState({
    name: "",
    email: "",
    message: "",
  });
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="container col-10" class="row" id="contact">
      <div className="container">
        <h1 class="center">Get In Touch</h1>
        <div className="container row col-12">
          <div className="container col-lg-9 col-sm-12 col-md-9" id="formContain">
            <h6>
              Like the page? Want to say hello, ask for my resume or see if we
              can build comethign amazing together? I'd love to hear from you! Please fill out the form below to reach out directly.
            </h6>
            <form class="needs-validation" novalidate onSubmit={onSubmit}>
              <div class="form-row">
                <div class="mb-4">
                  <label for="validationCustom01">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Full Name"
                    value="John Doe"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="mb-4">
                  <label for="validationCustom02">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Email Address"
                    value="JohnDoe@aol.com"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="mb-4">
                  <label for="validationCustomUsername">Message</label>
                  <div class="input-group">
                    <textarea
                      type="text"
                      class="form-control"
                      id="message"
                      placeholder="Write your message here"
                      aria-describedby="inputGroupPrepend"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please write a message.</div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary submit" type="submit">
                Send Message to Teagrin Forde
              </button>
            </form>
          </div>

          <ul className="container col-lg-2 col-sm-2 col-md-2">
            <li className="container">
              <a
                href="https://github.com/TeagrinForde"
                alt="Link to Teagrin's GitHub Page"
                className="card"
                class="iconMini"
                target="blank"
              >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-8-xxl.png&f=1&nofb=1" style={icon}/>
              </a>
            </li>
            <li className="container">
              <a
                href="https://www.linkedin.com/in/teagrin-forde-pmp-519422197/"
                alt="Link to Teagrin's LinkedIn Page"                
                className="card"
                class="iconMini"
                target="blank"
              >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F05%2Flinkedin-logo-white-1024x1024.png&f=1&nofb=1" style={icon} />
              </a>
            </li>
            <li className="container">
              <a
                href="https://stackoverflow.com/users/19309045/teagrin-forde/"
                alt="Link to Teagrin's stackoverflow Page"                
                className="card"
                class="iconMini"
                target="blank"
              >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fstackoverflow-3-512.png&f=1&nofb=1" style={icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className="container row" class='center'>
          <p>© 2022 | Created and designed by Teagrin Forde | ❤️ 🖥️</p>
        </div>
      </div>
    </section>
  );
}
