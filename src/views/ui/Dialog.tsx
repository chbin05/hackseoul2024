import Button from './Button'
import ButtonWrapper from './ButtonWrapper'
import styles from './Dialog.module.scss'

const Dialog = ({title, message = '', children = null, onClose}) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      {message && <p className={styles.message}>{message}</p>}
      <p className={styles.message}>{children}</p>
      <ButtonWrapper>
        <Button title='확인' onClick={onClose} />
      </ButtonWrapper>
    </div>
  )
}

export default Dialog