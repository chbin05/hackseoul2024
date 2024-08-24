import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'

interface Props {
  type?: 'full' | 'report'
}

const Map = ({type = 'full'}: Props) => {
  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap />
    </div>
  )
}

export default Map