
import { ArrowCircleRight2, ProfileCircle } from 'iconsax-react';
import React from 'react';

import Card from './components/Card';
import Carousel from './components/Carousel';

import Logo from './components/Logo';
import { CardData } from './data/CardData';
import Auth from './pages/Auth';
import Home from './pages/Home';
import useRouteElement from './useRouteElement';
import Forum from './pages/Forum';

const App = () => {
  const routeElements = useRouteElement()
  return (
    <div>

      <Forum></Forum>

    </div>
  );
};

export default App;