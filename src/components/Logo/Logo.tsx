import logo from '/src/assets/logo.svg'

const Logo = ({ classNameProp }) => {
  return (
    <div className={classNameProp}>
      <div className='header__logo-overlay' />
      <img src={logo} alt='Logo' />
    </div>
  )
}

export default Logo
