import style from '../../styles/Header.module.scss' 
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import {FaMoon, FaSun} from 'react-icons/fa'
import {useState, useEffect} from 'react' 


const Header = ({darkMode, bgChange}) => {
  
  //Display Mobile Menu
  const [showMenu, setShowMenu] = useState(false)
  
  const show = () => {
    setShowMenu(!showMenu)
  }
  
  //change header background on desktop 
  const [headerBg, setHeaderBg] = useState(false)
  
  const changeBg = () => {
    let currentPos = scrollY
    let newPos = 100
    if (currentPos < newPos) {
      setHeaderBg(true)
    }
  }
  
  useEffect(() => (
    window.addEventListener('scroll', changeBg)
   )) 
  
  return(
    <header className={style.header}>
      <div className={style.wrapper}>
          <div className={style.menu_container}>
            <Menu 
              bgChange={bgChange} 
              darkMode={darkMode} 
              showMenu={showMenu} 
              onShow={show} 
            />
            {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />} 
            <div
              className={style.desktop_menu} 
              id = "desk_menu" >
              <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
          </div>
      </div>
      <style jsx>
        {`
        #desk_menu {
          background: ${headerBg ? 'rgb(0,0,0,0.01)' : ''};
          z-index: 999999
        }
        `} 
       </style>
    </header>
    )
}

export default Header