import {useCallback} from "react";

import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';

const GoogleMap = ({ onCameraChanged, locations, center }) => {
  const handleClick = useCallback((ev) => {
      console.log("latitide = ", ev.detail.latLng?.lat);
      console.log("longitude = ", ev.detail.latLng?.lng);
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
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default GoogleMap;
