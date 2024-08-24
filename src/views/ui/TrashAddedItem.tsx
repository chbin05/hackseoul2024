import styles from './TrashAddedItem.module.scss'

const TrashAddedItem = ({index, icon, text}) => {
  return (
    <div className={styles.wrap}>
      <span>{index}</span>
      <img src={icon} alt='' width={25} height={25} />
      <strong>{text}</strong>
      <button type='button' className={styles.button}>삭제</button>
    </div>
  )
}

export default TrashAddedItem