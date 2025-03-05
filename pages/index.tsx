import WithLayout from '@src/components/hoc/withLayout';
import HomeView from '@src/components/Home';
import React from 'react';

const home = () => {
  return <HomeView />;
};

export default WithLayout(home, '#1 Adult Video Call Platform');
