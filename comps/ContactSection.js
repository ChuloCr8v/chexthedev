import styles from "../styles/ContactSection.module.scss";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const ContactSection = () => {
  return (
    <>
      <div className={styles.contactsection}>
      <div className={styles.headingcontainer}>
      <h1> Connect </h1>
      </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.p}>
              I am open to job offers in Front End Development, WordPress
              Development and Content Creation for Websites and Blogs.
            </p>
            <p className={styles.p}>
              You can reach me on any of the following channels and I will get
              back to you.
            </p>
          </div>
          <div className={styles.forms}>
            <ContactCard />
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
