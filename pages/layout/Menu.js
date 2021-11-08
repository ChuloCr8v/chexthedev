import style from '../../styles/Menu.module.scss'
import {FaBars, FaSun, FaMoon } from 'react-icons/fa'


const Menu = ({onShow, showMenu, bgChange, darkMode}) => {
  
  
  return (
    <div className={style.menu}>
      <FaBars onClick={onShow} className={style.menu_icon} />
      <div className={style.bg_change_icons}>
        {darkMode && 
          <FaSun 
            className={style.icon} 
            onClick={bgChange} 
          />
        } 
        {!darkMode && 
          <FaMoon 
            className={style.icon && style.icon_moon} 
            onClick={bgChange} 
          />
        } 
      </div>
    </div>
    ) 
}

export default Menu


