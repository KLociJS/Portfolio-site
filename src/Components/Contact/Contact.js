import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsSend } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqolqzn");

  return (
    <div id='contact'>
      <div className='contact-container'>
        {state.succeeded ? (
          <div className='notification-container'>
            <AiOutlineCheckCircle className='check-icon' />
            <h2>Thanks for contacting me!</h2>
            <p>I'll reply as soon as possible.</p>
          </div>
        ) : (
          <div className='contact-form-container'>
            <p className='contact-form-text'>
              Have a question or want to hire me?
            </p>
            <form onSubmit={handleSubmit} className='form'>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Email Address'
                className='form-input'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
              <textarea
                id='message'
                name='message'
                placeholder='Message'
                className='form-textarea'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
              <button
                type='submit'
                disabled={state.submitting}
                className='form-button'
              >
                Submit <BsSend className='send-icon' />
              </button>
            </form>
          </div>
        )}
        <div className='footer-content-container'>
          <div className='contact-icons'>
            <a
              href='https://www.linkedin.com/in/lorantkiszner/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsLinkedin className='linkedin-logo' />
            </a>
            <a
              href='https://github.com/KLociJS'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsGithub className='github-logo' />
            </a>
            <a href='mailto: kisznerlorant21@gmail.com'>
              <BiLogoGmail className='mail-logo' />
            </a>
          </div>
          <p className='footer-text'>
            No <FaRegCopyright className='copyright-icon' /> issues. Feel free
            to copy.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
