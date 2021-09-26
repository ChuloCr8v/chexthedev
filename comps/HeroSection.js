import Logo from '../public/logo.jpg'
import Image from 'next/image'
import Buttons from './Buttons'
import styles from '../styles/HeroSection.module.scss'
import {FaTwitter, FaGithub, FaLinkedin, FaHtml5, FaCss3, FaJs, FaWordpress, FaReact, FaPenNib} from 'react-icons/fa'


const HeroSection = () => {
  return(
    <div className={styles.herosection}>
        <div className={styles.logocontainer1}>
          <div className={styles.logocontainer2}>
            <Image src={Logo} height={75} width={50} alt="devchex logo" className={styles.logo} />
          </div>
        </div>
        <div className={styles.intro}>
          <h1>Hi,</h1>
          <h1> I'm <span>Chex.</span></h1>
          <div className={styles.roles} >
            <h2> Front-End Developer </h2>
            <h2> WordPress Developer </h2>
            <h2> Content Creator </h2>
          </div>
          <Buttons />
          
          <div className={styles.stacks}>
            <span className={styles.icons}>
              <FaHtml5 className={styles.icon} />
              <FaCss3 className={styles.icon} />
              <FaJs className={styles.icon} />
              <FaReact className={styles.icon} />
              <FaWordpress className={styles.icon} />
              <FaPenNib className={styles.icon} />
            </span>
            <span  className={styles.icons}>
              <a href="https://www.twitter.com/ChuloCr8v" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.socialicon} />
              </a>
              <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.socialicon} />
              </a>
              <a href="https://www.github.com/ChuloCr8v" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.socialicon} />
              </a>
            </span>
          </div>
        </div>
        
        
        
        
   </div>
    )
}

export default HeroSection 