import styles from './TrashItem.module.scss'

const TrashItem = ({id, icon, checked}) => {
  return (
    <span className={styles.wrap}>
      <input type="checkbox" className={styles.input} id={id} checked={checked} />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.icon}>{icon}</span>
      </label>
    </span>
  )
}

export default TrashItem