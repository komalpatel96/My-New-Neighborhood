import React from 'react';

const _ = require("lodash");
const { compose, withProps, lifecycle  } = require("recompose");
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
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBi38CXkWj_pgUUI2QKeNOjI2rghEKPZr4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` ,width:`100%`}} />,
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
        
        onToggleOpen2: index => e => {
          let newMarkers = [...this.state.markers];

          var open = newMarkers[index].isOpen;

          newMarkers[index].isOpen = !open;

          // sets the new state by making a copy of the state and merges it with the rest of the arguments
          this.setState({
            ...this.state,
            markers: newMarkers
          });
        },
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
          this.setState({
            places: places
          });

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
            title: place.title,
            name: place.name,
            isOpen: false
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
  withScriptjs,
  withGoogleMap
)(props => {

  return (<GoogleMap
    ref={props.onMapMounted}
    zoom={12}
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

    {!props.markers ? null: props.markers.map((marker, index) => {
      return (<Marker 
        key={index} 
        position={marker.position}
        onClick={
          props.onToggleOpen2(index)
        }
        >
      

    {marker.isOpen && <InfoWindow key={index} title={props.title}
        onCloseClick={props.onToggleOpen2(index)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div>
              {marker.name}
            </div>
      </InfoWindow>}

      </Marker>);}
    )}



  </GoogleMap>
);
})