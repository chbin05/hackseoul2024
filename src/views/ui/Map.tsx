import React from 'react'

import GoogleMap from '../../modules/views/GoogleMap';
import styles from './Map.module.scss'

const Map: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <GoogleMap />
    </div>
  )
}

export default Map