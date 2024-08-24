import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'
import { MapLocation } from '../../interfaces/map';
import { Trash } from '../../interfaces/trash';

interface Props {
  type?: 'full' | 'report'
  onCameraChanged?: (e) => void
  markers?: Trash[]
  center?: MapLocation
  selectedLocation?: MapLocation
  onClickMap?: (e) => void
}

const Map = ({ type = 'full', onCameraChanged, onClickMap, markers, center, selectedLocation }: Props) => {
  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap
        onCameraChanged={onCameraChanged}
        markers={markers}
        center={center}
        onClickMap={onClickMap}
        selectedLocation={selectedLocation} />
    </div>
  )
}

export default Map