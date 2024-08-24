import React from 'react'

import styles from './Button.module.scss'

const Button = ({title, onClick}) => {
  return (
    <button className={styles.wrap} type='button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button