import styles from './Button.module.scss'

interface Props {
  type?: string
  title: string
  onClick: (e) => void
  disabled?: boolean
}
const Button = ({ type = 'green', title, onClick, disabled = false }:Props) => {
  return (
    <button className={styles[`wrap-${type}`]} disabled={disabled} type='button' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button