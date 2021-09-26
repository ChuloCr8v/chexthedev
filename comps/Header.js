import Menu from './Menu'
import SocialIcons from './SocialIcons'
const Header = () => {
  return(
    <div class="w-full fixed hidden z-50 top-0 left-0 p-3">
      <div class="logo-container flex justify-between items-center">
      <SocialIcons />
      </div>
      <Menu />
    </div>
    )
}

export default Header 