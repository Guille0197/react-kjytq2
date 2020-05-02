import React, {useContext} from 'react';
import {Marker} from 'react-map-gl';

import StoreContext from './store';


export default () => { 
   const store = useContext(StoreContext);

  return store.filtered.map((place, index) => (
    <Marker key={`place-${index}`} className="marker" latitude={place.coordinates.latitude} longitude={place.coordinates.longitude}>
    <p>{place.name.substring(0, 2)}</p>
    </Marker>
  ))
};
