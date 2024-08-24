import React from 'react'

import styles from './ButtonWrapper.module.scss'

type Props = {
  children: React.ReactNode;
}

const ButtonWrapper: React.FC = ({children}: Props) => {
  return (
    <div className={styles.wrap}>
      {children}
    </div>
  )
}

export default ButtonWrapper