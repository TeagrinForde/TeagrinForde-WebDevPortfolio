import React, {useState} from 'react';


export default function Contact() {
    const icon = { width: "5rem" };
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    const [submitState, setSubmitState] = useState({
        name: '',
        email: '',
        message: '',
    });
    function onSubmit(event) {
        event.preventDefault();
        




    }
        

    return (
        <section className='container' class='row' id='contact'>
            <h1>Get In Touch</h1>
            <div className='container row'>
                <div className='container col-6'>
                    <h6>Like the page? Want to say hello, ask for my resume or see if we can build comethign amazing together? I'd Love to hear from you!</h6>
                    <form class="needs-validation" novalidate onSubmit={onSubmit}>
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="validationCustom01">Full Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Full Name" value="John Doe" required/>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationCustom02">Email Address</label>
                                <input type="text" class="form-control" id="email" placeholder="Email Address" value="JohnDoe@aol.com" required/>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationCustomUsername">Message</label>
                                <div class="input-group">

                                    <textarea type="text" class="form-control" id="message" placeholder="Write your message here" aria-describedby="inputGroupPrepend" required></textarea>
                                        <div class="invalid-feedback">
                                            Please write a message.
                                        </div>
                                </div>
                            </div>
                        </div>
                         
                        <button class="btn btn-primary" type="submit">Send Message</button>
                    </form>



                </div>
            </div>

            <div className='container row text-center'>
                <p>© 2022 | Created and Deployed by Teagrin Forde | ♥ ⚽️ 🖥️</p>
            </div>

        </section>
    );
};