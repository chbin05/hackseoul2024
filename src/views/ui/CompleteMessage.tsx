import completed from '../../img/completed.png'

import styles from './CompleteMessage.module.scss'
import { TYPE_ICON } from '../../consts/trash';

const CompleteMessage = ({ result }) => {
  return (
    <>
    <div className={styles.hero}>
      <img src={completed} alt='completed' width={100} height={100} />
    </div>
    <div className={styles.wrap}>
      {result?.length === 0 ?
        <>
          <h2 className={styles.title}>수집한 쓰레기가 없어요 :(</h2>
        </> : (
        <>
        <h2 className={styles.title}>대단해요! 수집을 완료했어요!</h2>
        <p className={styles.message}>
          {result.map((item) => {
            return (
              <>
                <img src={TYPE_ICON[item.type].icon} width={20} height={20} alt='' />
                {`를 총 ${item.count}개 `}
              </>
            )
          })}
          주웠어요.
          {`\n덕분에 도시가 깨끗해졌어요.`}</p>
          </>
      )}
    </div>
    </>
  )
}

export default CompleteMessage