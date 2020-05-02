import React, { Component, useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import Map from './map';
import './style.css';

import data from './data';
import StoreContext from './store';

function App() {
  const [filtered, setFiltered] = useState(data);
  const [filter, setFilter] = useState(undefined);

  useEffect(() => {
    setFiltered(data.filter(({name}) => name.search(RegExp(filter, 'i')) >= 0));
  }, [filter, ]);

  
  return (
    <StoreContext.Provider value={{filtered, setFilter}}>
      <Map />
    </StoreContext.Provider>
  );

}

render(<App />, document.getElementById('app'));
