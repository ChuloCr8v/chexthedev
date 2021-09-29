import Link from 'next/link' 
import {motion} from 'framer-motion'
import styles from '../styles/Buttons.module.scss'

const  Buttons = ({contact, setContact}) => {
    
  return(
    <div className={styles.buttons}>
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>
            <Link href="https://drive.google.com/file/d/1oLBAApnT3-q9nQs9UzzkOHz8Lk3tVNm3/view?usp=drivesdk" >My Resume</Link>
          </button>
        </div>
        <div className={styles.buttoncontainer}>
          <button className={styles.button} onClick={() => setContact(!contact)}  >
            <Link href="">Contact Me</Link>
          </button>
        </div>
    </div>
    )
}

export default Buttons