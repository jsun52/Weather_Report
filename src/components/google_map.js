import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default (props) => {

  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lon
    },
    zoom: 12
  };

  return(
    <GoogleMapReact
      defaultCenter = { defaultProps.center }
      defaultZoom = { defaultProps.zoom }
    >
      <AnyReactComponent
        lat={ props.lat }
        lng={ props.lon }
        text={ props.text }
      />
    </GoogleMapReact>
  );
}