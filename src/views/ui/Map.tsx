import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'
import { MapLocation } from '../../interfaces/map';
import { Trash } from '../../interfaces/trash';

interface Props {
  type?: 'full' | 'report'
  onDranEnd?: (e) => void
  markers?: Trash[]
  center?: MapLocation
  selectedLocation?: MapLocation
  onClickMap?: (e) => void
  onChange?: (e) => void
}

const Map = ({ type = 'full', onDranEnd, onChange, onClickMap, markers, center, selectedLocation }: Props) => {
  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap
        onDranEnd={onDranEnd}
        onChange={onChange}
        markers={markers}
        center={center}
        onClickMap={onClickMap}
      />
    </div>
  )
}

export default Map