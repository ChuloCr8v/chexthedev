import style from '../styles/ContactForm.module.scss' 

const ContactForm = () => {
  
  return(
    <form name="contact" action="/sent" data-netlify="true" className={style.contactform}>
    <input type="hidden" name="form-name" value="contact"/>
      <h5> Leave a message or enquiry </h5>
      <label htmlFor='name'> Name </label>
        <input type='text' name="name" required placeholder= 'Enter Name' />
      <label htmlFor='email'> Email </label>
        <input htmlFor='email' name="email" required placeholder= 'Enter Email' />
      <label htmlFor='message'> Message </label>
      <textarea id='message' name="message" placeholder ="Leave me a message" required />
      <input type='submit' className={style.submit} />
    </form>
    )
}

export default ContactForm