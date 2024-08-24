import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'
import { MapLocation } from '../../interfaces/map';

interface Props {
  type?: 'full' | 'report'
  onCameraChanged?: (e) => void
  locations?: MapLocation[]
  center?: MapLocation
  selectedLocation?: MapLocation
  onClickMap?: (e) => void
}

const Map = ({ type = 'full', onCameraChanged, onClickMap, locations, center, selectedLocation }: Props) => {
  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap
        onCameraChanged={onCameraChanged}
        locations={locations}
        center={center}
        onClickMap={onClickMap}
        selectedLocation={selectedLocation} />
    </div>
  )
}

export default Map