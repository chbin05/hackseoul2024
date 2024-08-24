import { APIProvider, Map } from '@vis.gl/react-google-maps';

const GoogleMap = () => {
  return (
    <APIProvider apiKey={'AIzaSyDcnkT2tvZnAnCilXxfuaoO9-o06wBELMU'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onCameraChanged={ev => console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
      ></Map>
    </APIProvider>
  );
};

export default GoogleMap;
