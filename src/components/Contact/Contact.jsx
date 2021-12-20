import React from 'react';
import emailjs from "emailjs-com"


const Contact = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_23jidgg",
            "template_3ldhfcb",
            e.target,
            "user_F2B3FRMQh9A6i47FGFmeY").then(res => {
                console.log(res)
                alert("Thanks you, your message successfully sent.");
            }).catch(err => {
                console.log(err)
                alert("Something is wrong")
            }
            );
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={sendEmail} method="POST" encType="multipart/form-data" id="contact">
                <div className="form-group mt-3">
                    <label htmlFor="InputEmail1">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="InputEmail1">Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="Textarea1">I would like to hear from you</label>
                    <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-dark mt-4">Send</button>
            </form>
            <a className='btn m-2' href='#navbar'>Back to Top</a>
        </>
    );
}

export default Contact;

