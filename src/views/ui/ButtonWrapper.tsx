import styles from './ButtonWrapper.module.scss'

const ButtonWrapper = ({children}) => {
  return (
    <div className={styles.wrap}>
      {children}
    </div>
  )
}

export default ButtonWrapper