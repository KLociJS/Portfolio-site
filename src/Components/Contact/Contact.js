import './Contact.css'
import { useForm, ValidationError } from '@formspree/react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqolqzn")

  return (
    <div id='contact'>
        <div className='contact-container'>
            {state.succeeded ? 
            <>
              <AiOutlineCheckCircle className='check-icon'/>
              <h2>Thanks for contacting me!</h2>
              <p>I'll reply as soon as possible.</p>
            </> : 
            <form onSubmit={handleSubmit} className='form'>
                <h2>Send me an email</h2>
                <input
                id="email"
                type="email" 
                name="email"
                placeholder='Email Address'
                />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
                <textarea
                id="message"
                name="message"
                placeholder='Message'
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
            }
        </div>
    </div>
    
  );
}
