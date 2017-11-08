import React from 'react';

const _ = require("lodash");
const { compose, withProps, lifecycle, withStateHandlers  } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const google = window.google;


export const MapWithASearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBi38CXkWj_pgUUI2QKeNOjI2rghEKPZr4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: this.props.centerMe,
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: false,
          })
        ,
        getInitialState() {
        return { showInfoWindow: false }
        },
        onDragEnd: () => {
          this.setState({
            bounds: this.state.center,
            center: refs.map.getCenter(),
          })
        },

        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          console.log("PLACES -------")
          console.log(places)
          this.setState({
            places: places
          });

          places.forEach(place => {
            console.log("place:-----------------")
            console.log(place);
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props => {

  console.log(props);

  return (<GoogleMap
    ref={props.onMapMounted}
    zoom={9}
    center={props.centerMe}
    onBoundsChanged={props.onBoundsChanged}
    places={props.places}


  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Search Nearby Places"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `34px`,
          marginTop: `10px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 1px 3px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>

    {!props.places ? null: props.places.map((marker, index) =>
      <Marker 
        key={index} 
        position={marker.geometry.location}
        onClick={props.onToggleOpen}
        >

      <InfoWindow isOpen= {false} onCloseClick={props.onToggleOpen}>
            <div>
              {marker.name}
            </div>
      </InfoWindow>

      </Marker>
    )}

    {props.isMarkerShown && 
      <Marker 
        position={props.centerMe}
      >
      <InfoWindow 
        title={props.title}
        >
            <div>
              {props.title}
            </div>
      </InfoWindow>
      </Marker>
    }

  </GoogleMap>
);
})