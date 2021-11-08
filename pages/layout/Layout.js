import {motion} from 'framer-motion'
import SocialIcons from './SocialIcons'
import ContactForm from '../../comps/ContactForm'
import styles from '../../styles/Menu.module.scss'
import Header from './Header'
import {useState, useEffect} from 'react' 
const Layout = ({children}) => {
  
  const [darkMode, setDarkMode] = useState(false)
   
  const bgChange = () => {
    setDarkMode(!darkMode)
  } 
  
  return(
    <main 
      className="layout relative z-20 transition all duration-2500" 
      style={{background: `${darkMode ? 'black' : ''}`}}  
    >
      <div className="relative z-50">
      <SocialIcons />
      </div>
      <div className='fixed top-0 left-0 w-full z-20 '>
        <Header bgChange={bgChange} darkMode={darkMode} />
      </div>
      {children} 
    </main>
    )
}

export default Layout 