import styles from './MapPin.module.scss'

interface Props {
  icon: string;
  index?: number;
}

const MapPin = ({icon, index}: Props) => {
  return (
    <div className={styles.wrap}>
      <img src={icon} width={30} height={30} alt='' />
      {index && <span className={styles.num}>{index}</span>}
    </div>
  )
}

export default MapPin