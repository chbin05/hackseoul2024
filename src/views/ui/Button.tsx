import React from 'react'

import styles from './Button.module.scss'

type Props = {
  title: string;
  onClick?: VoidFunction;
}

const Button: React.FC = ({title, onClick}: Props) => {
  return (
    <button className={styles.wrap} type='button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button