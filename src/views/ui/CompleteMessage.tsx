import completed from '../../img/completed.png'

import styles from './CompleteMessage.module.scss'



const CompleteMessage = () => {
  return (
    <>
    <div className={styles.hero}>
      <img src={completed} alt='completed' width={100} height={100} />
    </div>
    <div className={styles.wrap}>
      <h2 className={styles.title}>대단해요! 수집을 완료했어요!</h2>
      <p className={styles.message}>총 N종류의 쓰레기를 N개를 주웠어요. 
        {`\n덕분에 도시가 깨끗해졌어요.`}</p>
    </div>
    </>
  )
}

export default CompleteMessage