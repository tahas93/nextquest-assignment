import ListBody from '@src/components/Home/ListSection/ListBody';
import ListHeader from '@src/components/Home/ListSection/ListHeader';

import React from 'react';

const ListSection = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start space-y-8">
        <ListHeader />
        <ListBody />
      </div>
    </>
  );
};

export default ListSection;
