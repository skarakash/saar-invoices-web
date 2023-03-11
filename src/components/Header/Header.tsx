import './_header.scss'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <div className='header'>
      <Logo classNameProp='header__logo' />
      <div className='header__themeSwitcher' />
      <div className='header__avatar' />
    </div>
  )
}

export default Header
