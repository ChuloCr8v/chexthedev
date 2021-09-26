import Link from 'next/link' 
import {motion} from 'framer-motion'
import styles from '../styles/Buttons.module.scss'




const  Buttons = ({text, textOne}) => {
  return(
    <div className={styles.buttons}>
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>
            <Link href="" >My Resume</Link>
          </button>
        </div>
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>
            <Link href="">Contact Me</Link>
          </button>
        </div>
    </div>
    )
}

export default Buttons