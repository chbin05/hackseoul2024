import logo from '../../img/logo.png';

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrap}>
      <h1 className={styles.title}><a href='/' className={styles.link}><img src={logo} width={45} height={45} alt='' />GC</a></h1>
    </header>
  )
}

export default Header