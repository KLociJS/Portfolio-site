import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
  const [state, handleSubmit] = useForm("xoqolqzn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div id='contact'>
        <div className='contact-container'>
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
        </div>
    </div>
    
  );
}
