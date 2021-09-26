import style from "../styles/ContactCard.module.scss";
import Logo from "../public/logocrop.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className={style.contactcard}>
      <div className={style.details}>
        <img src={Logo.src} />
        <div className={style.name}>
          <p> Nkematu </p>
          <p> Bonaventure </p>
          <h5>
            Front-End Developer. 
          </h5>
            <h5> WordPress Developer. </h5>
            <h5> Content Creator. </h5>
       
        </div>
      </div>
      <div className={style.contact}>
        <span>
          <FaPhone className={style.phone} />
          <p> +2348138369977 </p>
        </span>
        <span>
          <FaEnvelope className={style.icon} />
          <p> Chulocr8v@gmail.com </p>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
