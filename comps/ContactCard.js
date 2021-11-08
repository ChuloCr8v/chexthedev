import style from "../styles/ContactCard.module.scss";
import Logo from "../public/logocrop.png";
import { FaMobile , FaEnvelope,  FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className={style.container}>
    <div className={style.contactcard}>
      <div className={style.details}>
        <img src={Logo.src} />
        <div className={style.name}>
          <p className={style.surname}> Nkematu </p>
          <p className={style.first_name}> Bonaventure </p>
          <h5 className={style.card_roles} >
            Front-End Developer. </h5>
            <h5 className={style.card_roles} > WordPress Developer. </h5>
            <h5 className={style.card_roles}> Content Creator. </h5>
       
        </div>
      </div>
      <div className={style.contact}>
        <span>
          <FaMobile className={style.icon} />
          <p className={style.number}> +2348138369977 </p>
        </span> 
        <span>
          <FaEnvelope className={style.icon} />
          <p className={style.email}> Chulocr8v@gmail.com </p>
        </span>
      </div>
    </div>
    </div>
  );
};

export default ContactCard;
