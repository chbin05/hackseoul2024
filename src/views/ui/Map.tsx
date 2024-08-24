import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'
import { MapLocation } from '../../interfaces/map';
import { Trash } from '../../interfaces/trash';
import React from 'react';

interface Props {
  useIndex?: boolean
  type?: 'full' | 'report'
  onDranEnd?: (e) => void
  markers?: Trash[]
  defaultCenter?: MapLocation
  selectedLocation?: MapLocation
  userLocation?: MapLocation
  onClickMap?: (e) => void
  onChange?: (e) => void
}

const Map = ({ useIndex = false, type = 'full', onDranEnd, onChange, onClickMap, markers, defaultCenter, selectedLocation, userLocation }: Props) => {
  if (!defaultCenter) {
    return (
      <div className={styles[`wrap-${type}`]}>
        <GoogleMap
          useIndex={useIndex}
          onDranEnd={onDranEnd}
          onChange={onChange}
          markers={markers}
          defaultCenter={{ lat: 37.56014114732037, lng: 126.98241122396543 }}
          onClickMap={onClickMap}
          selectedLocation={selectedLocation}
          userLocation={{ lat: 37.56014114732037, lng: 126.98241122396543 }}
        />
      </div>
    )
  }

  return (
    <div className={styles[`wrap-${type}`]}>
      <GoogleMap
        useIndex={useIndex}
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