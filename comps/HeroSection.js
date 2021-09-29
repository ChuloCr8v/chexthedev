import Logo from '../public/logo.jpg'
import Image from 'next/image'
import Buttons from './Buttons'
import styles from '../styles/HeroSection.module.scss'
import {FaTwitter, FaGithub, FaLinkedin, FaHtml5, FaCss3, FaJs, FaWordpress, FaReact, FaPenNib, FaTimes } from 'react-icons/fa'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import {motion} from 'framer-motion'
import {useState} from 'react'


const HeroSection = () => {

     const [contact, setContact] = useState(false) 
     
  return(
    <motion.div className={styles.herosection}
    initial = {{x: -50, opacity: 0}}
    animate = {{x:  0, opacity: 1}}
    transition = {{delay: 0.5, type:"spring", stiffness:"200"}}
    >
        <div className={styles.logocontainer1}>
          <div className={styles.logocontainer2}>
            <Image src={Logo} height={75} width={50} alt="devchex logo" className={styles.logo} />
          </div>
        </div>
        <div className={styles.intro}>
          <motion.h1
           initial = {{y: -50, opacity: 0}}
           animate = {{y:  0, opacity: 1}}
           transition = {{delay: 1, type:"spring", stiffness:"200"}}
          >Hi,
          </motion.h1>
          <motion.h1
           initial = {{y: 20, opacity: 0}}
           animate = {{y:  0, opacity: 1}}
           transition = {{delay: 1.5, type:"spring", stiffness:"200"}}
          > I'm <motion.span
           initial = {{opacity: 0}}
           animate = {{
           opacity: 1, 
           filter: [
            'hue-rotate(360deg) contrast(100%)', 
            'hue-rotate(180deg) contrast(200%)', 
            'hue-rotate(90deg) contrast(300%)', 
            'hue-rotate(180deg) contrast(100%)',
            'hue-rotate(90deg) contrast(500%)', 
            'hue-rotate(0) contrast(100%)'
           ] 
           }}
           transition = {{
           delay: 1.8, type:"spring", stiffness:"200"
           }}
          >Chex.</motion.span>
          </motion.h1>
          <div className={styles.roles} >
            <motion.h2
            initial = {{x: -50, opacity: 0}}
            animate = {{x:  0, opacity: 1}}
            transition = {{delay: 2, type:"spring", stiffness:"200"}}
            > Front-End Developer </motion.h2>
            <motion.h2
            initial = {{x: 50, opacity: 0}}
            animate = {{x:  0, opacity: 1}}
            transition = {{delay: 2.3, type:"spring", stiffness:"200"}}
            >  WordPress Developer </motion.h2>
            <motion.h2
            initial = {{x: -50, opacity: 0}}
            animate = {{x:  0, opacity: 1}}
            transition = {{delay: 2.6, type:"spring", stiffness:"200"}}
            >  Content Creator </motion.h2>
          </div>
          <motion.div
            initial = {{y: -30, opacity: 0}}
            animate = {{y:  0, opacity: 1}}
            transition = {{delay: 2.9, type:"spring", stiffness:"200"}}
            > 
          <Buttons contact={contact} setContact={setContact} />
          </motion.div>
          {contact && <div className={styles.formcontainer} >
            <FaTimes onClick={() => setContact(false)} className={styles.icon} /> 
            <motion.div className={styles.forms}
            initial = {{ y: 20}} 
            animate = {{y: 0}}
            transition = {{type:"spring", stiffness: 400}}
          >
            <ContactForm />
            <ContactCard />
            </motion.div>
            </div>} 
          <div className={styles.stacks}>
            <motion.span className={styles.icons}
            initial = {{y: 50, opacity: 0}}
            animate = {{y:  0, opacity: 1}}
            transition = {{delay: 3.2, type:"spring", stiffness:"200"}}
            >
              <FaHtml5 className={styles.icon} />
              <FaCss3 className={styles.icon} />
              <FaJs className={styles.icon} />
              <FaReact className={styles.icon} />
              <FaWordpress className={styles.icon} />
              <FaPenNib className={styles.icon} />
            </motion.span>
            <motion.span className={styles.icons}
            initial = {{y: -50, opacity: 0}}
            animate = {{y:  0, opacity: 1}}
            transition = {{delay: 3.5, type:"spring", stiffness:"200"}}
            >
              <a href="https://www.twitter.com/ChuloCr8v" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.socialicon} />
              </a>
              <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.socialicon} />
              </a>
              <a href="https://www.github.com/ChuloCr8v" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.socialicon} />
              </a>
            </motion.span>
          </div>
        </div>
        
        
        
        
   </motion.div>
    )
}

export default HeroSection 