import React, {useCallback, useContext} from 'react';

import StoreContext from './store';
import List from './list';

export default () => { 

  const store = useContext(StoreContext);
  const _onChange = useCallback((event) => {
  store.setFilter(event.target.value);
  }, []);

  return (
    <div className="filter">
      <div className="search">
        <input type="text" onChange={_onChange}/>
      </div>

      <List />

    </div>
  )
};
