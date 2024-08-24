import styles from './MapPin.module.scss'

interface Props {
  icon: string;
  index?: number;
  useIndex?: boolean
}

const MapPin = ({icon, index, useIndex}: Props) => {
  return (
    <div className={styles.wrap}>
      <img src={icon} width={30} height={30} alt='' />
      {useIndex && <span className={styles.num}>{index}</span>}
    </div>
  )
}

export default MapPin