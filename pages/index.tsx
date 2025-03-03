import WithLayout from '@src/components/hoc/withLayout';
import HomeView from '@src/views/HomeView';
import React from 'react';

const home = () => {
  return <HomeView />;
};

export default WithLayout(home, 'home');
