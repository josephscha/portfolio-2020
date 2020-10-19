import React from 'react';
import ContactMeStyles from './contactme.module.css'
import {FaEnvelope, FaLinkedin} from 'react-icons/fa';

function ContactMe() {
    return (
        <div className={ContactMeStyles.Container}>
            <h1 className={ContactMeStyles.Title}>Get in Touch</h1>
            <div className={ContactMeStyles.ContactMe}>
            <p>Thank you for looking through my portfolio website. Please feel free to give feedback on any errors or design advice! </p>
            <p>I am actively looking for work and opportunities to learn and grow. Please feel free to reach out with any opportunities, fun project ideas, or just to say hello! </p>
            <a href="mailto:Josephshincha@gmail.com">
                <FaEnvelope className={ContactMeStyles.Icon} />
            </a>
            <a
            href="https://www.linkedin.com/in/joseph-cha-316639174/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin className={ContactMeStyles.Icon} />
            </a>
            </div>
        </div>
    )
}

// change to a way where they can email me directly through portal
export default ContactMe;