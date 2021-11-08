import style from '../styles/ContactForm.module.scss' 

const ContactForm = () => {
  
  return(
    <form name="contact" action="/sent" data-netlify="true" className={style.contact_form}>
      <input type="hidden" name="form-name" value="contact"/>
      <h5> Leave a message or enquiry </h5>
      <div className={style.form_control}>
        <label htmlFor='name'> Name </label>
        <input type='text' name="name" required placeholder= 'Enter Name' />
      </div>
      <div className={style.form_control}>
        <label htmlFor='email'> Email </label>
        <input htmlFor='email' name="email" required placeholder= 'Enter Email' />
      </div>
      <div className={style.form_control}>
        <label htmlFor='message'> Message </label>
        <textarea id='message' name="message" placeholder ="Leave me a message" required />
      </div>
      <input type='submit' className={style.submit} />
    </form>
    )
}

export default ContactForm