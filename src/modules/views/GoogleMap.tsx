import { useCallback } from "react";

import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

import { TYPE_ICON } from '../../consts/trash';

const GoogleMap = ({ onDranEnd, onClickMap, onChange, markers, defaultCenter, selectedLocation, userLocation }) => {
  const handleClick = useCallback((e) => {
    onClickMap?.(e)
  }, []);

  return (
    <APIProvider apiKey={'AIzaSyDcnkT2tvZnAnCilXxfuaoO9-o06wBELMU'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        mapId='c22491880465f6'
        defaultZoom={18}
        defaultCenter={defaultCenter}
        center={null}
        onClick={handleClick}
        onDragend={onDranEnd}
        onCameraChanged={onChange}
      >
        <PoiMarkers markers={markers} />
        {userLocation?.lat &&
          <AdvancedMarker
            key={`${userLocation.lat}-${userLocation.lng}`}
            position={userLocation}>
             <div id='dot' style={{ width:'20px',height:'20px',background:'blue' }} />
          </AdvancedMarker>}
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

const PoiMarkers = ({ markers = [] }) => {
  if (markers?.length === 0) {
    return null
  }

  return (
    <>
      {markers.map((marker, index) => (
        <AdvancedMarker
          key={`${marker?.location?.lat}-${index}`}
          position={marker?.location}>
          <img src={TYPE_ICON[marker.type].icon} width={30} height={30} alt='' />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default GoogleMap;
