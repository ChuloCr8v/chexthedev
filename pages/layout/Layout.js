import {motion} from 'framer-motion'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import SocialIcons from './SocialIcons'
import {useState} from 'react'
import styles from '../../styles/Menu.module.scss'
import {FaMoon, FaSun} from 'react-icons/fa'

const Layout = ({children}) => {
  
  const [showMenu, setShowMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  
  const show = () => {
    setShowMenu(!showMenu)
  }
  const bgMode = () => {
    setDarkMode(!darkMode)
  }
  
  return(
    <main className="layout relative z-20 " >
    <div className="relative z-50">
      <SocialIcons />
      </div>
      <button onClick={bgMode} className="dark-mode-toggle fixed z-50 top-12 right-12">
         {!darkMode && <motion.div className="dark"
           initial = {{y: -50, opacity: 0}}
           animate = {{y: 0, opacity: 1}}
           transition = {{type: "spring", stiffness: 80}}
         >
            <FaMoon className="absolute text-xl text-white" />
           </motion.div>} 
          {darkMode && <motion.div className="light"
            initial = {{y: 50, opacity: 0}}
           animate = {{y: 0, opacity: 1}}
           transition = {{type: "spring", stiffness: 80}}
          >
            <FaSun className="absolute text-yellow-500 text-2xl"/>
        </motion.div>} 
      </button>
      {children} 
      <div className="flex justify-around fixed ml-10 bottom-8">
      <div className={` ${showMenu && styles.rotate }`} >
        <Menu showMenu={showMenu} onShow={show} />
      </div>
        {showMenu && <MobileMenu />} 
      </div>
      <style jsx>
        {` 
           .layout {
                transition: all 0.3s ease-in-out;
               background: ${darkMode ? 'black' : 'none'}
           }
        `} 
      </style>
    </main>
    )
}

export default Layout 