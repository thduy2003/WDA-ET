

import React from 'react';



import useRouteElement from './useRouteElement';


const App = () => {
  const routeElements = useRouteElement()
  return (
    <div>

      {routeElements}

    </div>
  );
};

export default App;