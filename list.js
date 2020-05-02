import React, {useContext} from 'react';

import StoreContext from './store';

export default () => { 

  const store = useContext(StoreContext);

  return (
    <div className="list">
      {store.filtered.map((place, index) => (
        <article className="place">
        {place.name}
        </article>
        ))}
      </div>
  )
};
