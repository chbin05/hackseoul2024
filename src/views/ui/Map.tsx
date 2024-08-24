import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'
import { MapLocation } from '../../interfaces/map';
import { Trash } from '../../interfaces/trash';

interface Props {
  type?: 'full' | 'report'
  onDranEnd?: (e) => void
  markers?: Trash[]
  defaultCenter?: MapLocation
  selectedLocation?: MapLocation
  userLocation?: MapLocation
  onClickMap?: (e) => void
  onChange?: (e) => void
}

const Map = ({ type = 'full', onDranEnd, onChange, onClickMap, markers, defaultCenter, selectedLocation, userLocation }: Props) => {
  if (!defaultCenter) {
    return null
  }

  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap
        onDranEnd={onDranEnd}
        onChange={onChange}
        markers={markers}
        defaultCenter={defaultCenter}
        onClickMap={onClickMap}
        selectedLocation={selectedLocation}
        userLocation={userLocation}
      />
    </div>
  )
}

export default Map