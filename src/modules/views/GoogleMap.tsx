import {useCallback} from "react";

import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';

interface Poi { key: string, location: { lat: number, lng: number }}

const locations: Poi[] = [
  {key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108  }},
  {key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 }},
  {key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 }},
  {key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 }},
  {key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 }},
  {key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 }},
  {key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 }},
  {key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 }},
  {key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 }},
  {key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 }},
  {key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 }},
  {key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 }},
  {key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 }},
  {key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 }},
  {key: 'barangaroo', location: { lat: - 33.8605523, lng: 151.1972205 }},
];

const GoogleMap = () => {
  const handleClick = useCallback((ev) => {
      console.log("latitide = ", ev.detail.latLng?.lat);
      console.log("longitude = ", ev.detail.latLng?.lng);
  }, []);

  return (
    <APIProvider apiKey={'AIzaSyDcnkT2tvZnAnCilXxfuaoO9-o06wBELMU'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        mapId='c22491880465f6'
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onClick={handleClick}
        onCameraChanged={ev => console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
      >
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
};

const PoiMarkers = (props) => {
  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default GoogleMap;
