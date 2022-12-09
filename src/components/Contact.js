import React, { useRef } from "react";
import emailjs from "@emailjs/browser";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                // "service id taken form email services ",
                "service_mc8ny4g",
                // " template id taken from email templates",
                "template_7bjmygn",
                form.current,
                // "user id taken from Account API keys public key "
                "6QhcJ-Zq2pe-_ZHgE"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent")
                },
                (error) => {
                    console.log(error.text);
                    console.log("error please sent your message again!")
                }
            );
    };

    return (
        <div className="StyledContactForm">

            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="user_name" />
                <label>Your Email</label>
                <input type="email" name="user_email" />
                <label>Date you need me DD/MM/YYYY</label>
                <textarea name="message" />
                <label>Location</label>
                <textarea name="message" />
                <label>Any additional details you would like to share ? </label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;

