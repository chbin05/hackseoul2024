import styles from './Button.module.scss'

const Button = ({type = 'green', title, onClick}) => {
  return (
    <button className={styles[`wrap-${type}`]} type='button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button