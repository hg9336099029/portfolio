import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6yq1m9h', 'template_bu76bl8', form.current, 'uo6kY-7w-rb8wRtMI')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="User"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="User"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="User"
            placeholder="Message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="button"
          />
          <span>{done && 'Thanks for contacting me!'}</span>
          <div className="blur c-blur" style={{ background: 'var(--purple)' }} ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
