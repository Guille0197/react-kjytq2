import React, { useState } from 'react';
import MapGL from 'react-map-gl';

import Markers from './markers';
import Filter from './filter';


const DEFAULT_VIEWPORT = {
  width: '100vw',
  height: '100vh',
  latitude: 9.047773,
  longitude: -79.467308,
  zoom: 8
};

// onViewportChange
export default ({ onChangeFilterText }) => { 
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT)
  
  return (
  <MapGL {...viewport}
  mapboxApiAccessToken="pk.eyJ1IjoiY2hyaXN0aG92YWwiLCJhIjoiY2ppM2s3eWp1MDk5NzN2bjhnNjM2NnB2bCJ9.qSDuoQbXzEjiPgqYYkvgdg"
  onViewportChange={setViewport}>
    <Filter />
    <Markers />
  </MapGL>)
};
