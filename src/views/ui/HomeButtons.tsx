import React from 'react'

import styles from './HomeButtons.module.scss'

const HomeButtons = () => {
  return (
    <div className={styles.wrap}>
      <button className={styles.button} type='button'>
       쓰레기 발견
      </button>
      <button className={styles.button} type='button'>
        쓰레기 정리 시작
      </button>
    </div>
  )
}

export default HomeButtons