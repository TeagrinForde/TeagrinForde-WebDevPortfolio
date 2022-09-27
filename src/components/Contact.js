import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function Contact() {
  const icon = { width: "3rem" };
  // disabling form submissions if invalid fields
  const [submitState, setSubmitState] = useState({
    name: "",
    email: "",
    message: "",
  });
  function onSubmit(event) {
    event.preventDefault();
    window.location.href = `mailto:${
      submitState.email
    }?subject=portfolioMessage&body=${
      submitState.name + ", " + submitState.message
    }`;
  }

  return (
    <Container id="contact">
      <div className="container p-5">
        <h1 class="center">Get In Touch</h1>
        <div className="container row col-12" class="center">
          <div
            className="container col-lg-7 col-sm-12 col-md-9"
            id="formContain"
          >
            <h6>
              Like the page? Want to say hello, ask for my resume or see if we
              can build somethign amazing together? I'd love to hear from you!
              Please fill out the form below to email me directly at TeagrinB@gmail.com.
            </h6>
            <form class="needs-validation" novalidate onSubmit={onSubmit}>
              <div class="form-row">
                <div class="mb-4">
                  <label for="validationCustom01">Your Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Full Name"
                    value={submitState.name}
                    required
                    onChange={(event) =>
                      setSubmitState({
                        ...submitState,
                        name: event.target.value,
                      })
                    }
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="mb-4">
                  <label for="validationCustom02">Your Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Email Address"
                    value={submitState.email}
                    required
                    onChange={(event) =>
                      setSubmitState({
                        ...submitState,
                        email: event.target.value,
                      })
                    }
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="mb-4">
                  <label for="validationCustomUsername">
                    Message to Teagrin Forde
                  </label>
                  <div class="input-group">
                    <textarea
                      type="text"
                      class="form-control"
                      id="message"
                      placeholder={submitState.message}
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={(event) =>
                        setSubmitState({
                          ...submitState,
                          message: event.target.value,
                        })
                      }
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
            <li className="container contactIcons">
              <a
                href="https://github.com/TeagrinForde"
                className="card"
                class="iconMini center"
                target="blank"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-8-xxl.png&f=1&nofb=1"
                  style={icon}
                  alt="Link to Teagrin's GitHub Page"
                />
              </a>
            </li>
            <li className="container contactIcons">
              <a
                href="https://www.linkedin.com/in/teagrin-forde-pmp-519422197/"
                className="card"
                class="iconMini center"
                target="blank"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F05%2Flinkedin-logo-white-1024x1024.png&f=1&nofb=1"
                  style={icon}
                  alt="Link to Teagrin's LinkedIn Page"
                />
              </a>
            </li>
            <li className="container contactIcons">
              <a
                href="https://stackoverflow.com/users/19309045/teagrin-forde/"
                className="card"
                class="iconMini center"
                target="blank"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fstackoverflow-3-512.png&f=1&nofb=1"
                  style={icon}
                  alt="Link to Teagrin's stackoverflow Page"
                />
              </a>
            </li>
            <li className="container contactIcons">
              <a
                href="https://www.discordapp.com/users/998714595420143666"
                className="card"
                class="iconMini center"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fwhite-discord-icon%2Fwhite-discord-icon-11.jpg&f=1&nofb=1&ipt=9af6a11c88a02a1012d1b53b07604c3509a3646c91ce8845ece149907281d2e1&ipo=images"
                  style={icon}
                  alt="Link to Teagrin's Discord"
                  class="round"
                />
              </a>
            </li>
            <li className="container contactIcons">
              <a
                href="https://acmeco.slack.com/team/U03KABTAZAR"
                className="card"
                class="iconMini center"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.itprotoday.com%2Fsites%2Fitprotoday.com%2Ffiles%2FappIcon_desktop.png&f=1&nofb=1&ipt=4a76db059f4011ab76f5f9d9b45e94f745d36cc301cbbb51e88e97643143fcf4&ipo=images"
                  style={icon}
                  alt="Link to Teagrin's Slack"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="container row" class="center pt-5">
          <p>© 2022 | Created and designed by Teagrin Forde | ❤️ 🖥️</p>
        </div>
      </div>
    </Container>
  );
}
