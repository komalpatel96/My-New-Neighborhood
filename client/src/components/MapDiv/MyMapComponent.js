import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    center={props.center}
  >
    {props.isMarkerShown && 
      <Marker 
      position={props.center}
      onClick={props.onToggleOpen} />}
  </GoogleMap>
))
