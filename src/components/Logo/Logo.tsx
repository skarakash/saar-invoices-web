import { ReactComponent as LogoImage } from '/src/assets/logo.svg'

const Logo = ({ classNameProp }) => {
  return (
    <div className={classNameProp}>
      <div className='header__logo-overlay' />
      <LogoImage className='header__logo-image' />
    </div>
  )
}

export default Logo
