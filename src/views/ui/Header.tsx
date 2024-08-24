import React from 'react'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.wrap}>
      <h1 className={styles.title}><a href='/' className={styles.link}>손길</a></h1>
    </header>
  )
}

export default Header