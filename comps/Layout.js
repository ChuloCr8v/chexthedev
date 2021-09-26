import Header from './Header'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import SocialIcons from './SocialIcons'
import {useState} from 'react'
import styles from '../styles/Menu.module.scss'

const Layout = ({children}) => {
  
  const [showMenu, setShowMenu] = useState(false)
  
  const show = () => {
    setShowMenu(!showMenu)
  }
  
  return(
    <main class="" >
      <Header />
      <SocialIcons />
      {children} 
      <div className="flex justify-around fixed ml-10 bottom-8">
      <div className={` ${showMenu && styles.rotate }`} >
        <Menu showMenu={showMenu} onShow={show} />
      </div>
        {showMenu && <MobileMenu />} 
      </div>
    </main>
    )
}

export default Layout 