import { useCallback } from "react";

import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

import glass from '../../img/glass.png'

const GoogleMap = ({ onCameraChanged, onClickMap, locations, center, selectedLocation }) => {
  const handleClick = useCallback((e) => {
    onClickMap?.(e)
  }, []);

  return (
    <APIProvider apiKey={'AIzaSyDcnkT2tvZnAnCilXxfuaoO9-o06wBELMU'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        mapId='c22491880465f6'
        defaultZoom={15}
        defaultCenter={{ lat: 37.56014114732037, lng: 126.98241122396543 }}
        center={center}
        onClick={handleClick}
        onCameraChanged={onCameraChanged}
      >
        <PoiMarkers pois={locations} />
        {selectedLocation?.lat &&
          <AdvancedMarker
            key={`${selectedLocation.lat}-${selectedLocation.lng}`}
            position={selectedLocation}>
             <div id='dot' style={{ width:'10px',height:'10px',background:'red' }} />
          </AdvancedMarker>}
      </Map>
    </APIProvider>
  );
};

const PoiMarkers = ({ pois = [] }) => {
  if (pois?.length === 0) {
    return null
  }

  return (
    <>
      {pois.map((poi) => (
        <AdvancedMarker
          key={`${poi.lat}-${poi.lng}`}
          position={poi}>
          <img src={glass} width={30} height={30} alt='' />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default GoogleMap;
