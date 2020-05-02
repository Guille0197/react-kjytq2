import React, { createContext } from 'react';
import data from './data';

const defaultValue = {
  filtered: data,
  filter: undefined,
  applyFilter(filter){
    return data.filter(({name}) => name.search(RegExp(filter, 'i')) >= 0);
  }
}


export default createContext(defaultValue);