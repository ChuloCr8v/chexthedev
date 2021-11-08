import {FaHome, FaUser, FaTools, FaBriefcase, FaPhone} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {AnimatePresence} from 'framer-motion'
import style from '../../styles/MobileMenu.module.scss'

const MobileMenu= ({showMenu, setShowMenu}) => {
  return(
    <AnimatePresence >
    <motion.nav
    className={style.nav}
    initial = {{ x: -50, opacity: 0}} 
    animate = {{ x: 20, opacity: 1 }} 
    exit = {{ x: -20, opacity: 0}} 
    transition = {{ type: "spring", stiffness: 200}} 
    >
      <ul
      className={style.menu} 
      >
        <li 
        className={style.menu_item} 
        onClick={() => setShowMenu(false)} 
        >
          <Link href="/"> 
            <motion.div
            initial = {{y: -100, opacity: 0}}
            animate = {{ y: 0, opacity: 1}}
            transition = {{delay: 1, type: "spring", stiffness: 200, duration: 2}}
            >
                <FaHome className={style.icon} />
            </motion.div>
   
          </Link>
        </li>
        <li
        className={style.menu_item} 
        onClick={() => setShowMenu(false)} 
        >
          <Link href="/aboutme"> 
          About 
          </Link>
        </li>
        
        <li 
        className={style.menu_item} 
        onClick={() => setShowMenu(false)} 
        >
          <Link href="/mystacks"> 
          Skills 
          </Link>
        </li>
        <li 
        className={style.menu_item} 
        onClick={() => setShowMenu(false)} 
        >
          <Link href="/myportfolio"> 
          Portfolio 
          </Link>
        </li>
        <li  
        className={style.menu_item} 
        onClick={() => setShowMenu(false)} 
        >
          <Link href="/contactme">
          <motion.div
            initial = {{y: 100, opacity: 0}}
            animate = {{ y: 0, opacity: 1}}
            transition = {{delay: 1, type: "spring", stiffness: 200, duration: 2}}
            >
                <FaPhone className={style.icon} /> 
            </motion.div>
          </Link>
        </li>
      </ul>   
    </motion.nav>
    </AnimatePresence>
  )
}

export default MobileMenu