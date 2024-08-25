import { useCallback } from "react";

import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

import { TYPE_ICON } from '../../consts/trash';
import MapPin from "../../views/ui/MapPin";
import MapUserPin from "../../views/ui/MapUserPin";

const GoogleMap = ({ useIndex, onDranEnd, onClickMap, onChange, markers, defaultCenter, selectedLocation, userLocation }) => {
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
        <PoiMarkers markers={markers} useIndex={useIndex} />
        {userLocation?.lat &&
          <AdvancedMarker
            key={`${userLocation.lat}-${userLocation.lng}`}
            position={userLocation}>
             <MapUserPin />
          </AdvancedMarker>}
        {selectedLocation?.lat &&
          <AdvancedMarker
            key={`${selectedLocation.lat}-${selectedLocation.lng}`}
            position={selectedLocation}>
            <div id='dot' style={{ width:'10px',height:'10px',background:'red', borderRadius: '50%' }} />
          </AdvancedMarker>}
      </Map>
    </APIProvider>
  );
};

const PoiMarkers = ({ markers = [], useIndex }) => {
  if (markers?.length === 0) {
    return null
  }

  return (
    <>
      {markers.map((marker, index) => (
        <AdvancedMarker
          key={`${marker?.location?.lat}-${index}`}
          position={marker?.location}>
          <MapPin icon={TYPE_ICON[marker.type].icon} useIndex={useIndex} index={index + 1} />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default GoogleMap;
