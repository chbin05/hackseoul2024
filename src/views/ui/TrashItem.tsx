import check from '../../img/check.png';

import styles from './TrashItem.module.scss'

const TrashItem = ({id, icon, text, checked}) => {
  return (
    <span className={styles.wrap}>
      <input type="radio" className={styles.input} id={id} checked={checked} />
      <label htmlFor={id} className={styles.label}>
        <img className={styles[`img-icon`]} src={icon} alt='' width={44} height={44} />
        <img className={styles[`img-check`]} src={check} alt='' width={44} height={44} />
        <span className={styles.text}>{text}</span>
        
      </label>
    </span>
  )
}

export default TrashItem