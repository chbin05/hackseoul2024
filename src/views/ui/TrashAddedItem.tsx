import styles from './TrashAddedItem.module.scss'

const TrashAddedItem = ({index, icon, text}) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.num}>{index}</span>
      <img className={styles.img} src={icon} alt='' width={30} height={30} />
      <strong className={styles.name}>{text}</strong>
      <button type='button' className={styles.button}>삭제</button>
    </div>
  )
}

export default TrashAddedItem