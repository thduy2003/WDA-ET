

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



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