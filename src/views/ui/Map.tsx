import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'
import { MapLocation } from '../../interfaces/map';

interface Props {
  type?: 'full' | 'report'
  onCameraChanged?: (e) => void
  locations?: MapLocation[]
  center?: MapLocation
}

const Map = ({type = 'full', onCameraChanged, locations, center}: Props) => {
  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap onCameraChanged={onCameraChanged} locations={locations} center={center} />
    </div>
  )
}

export default Map