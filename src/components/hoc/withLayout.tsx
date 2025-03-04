import PageHead from '@src/components/common/PageHead';
import PageMetaData from '@src/components/common/PageMetaData';
import { PageScripts } from '@src/components/common/PageScripts';
import Header from '@src/components/Header';
import React from 'react';

const WithLayout = (ComposedComponent: any, title?: string) => {
  const withLayout = (props: any) => {
    return (
      <>
        <PageHead />
        <PageMetaData title={title} />
        <div className="relative w-full">
          <Header />
          <div className="lg:mt-[70px]">
            <ComposedComponent {...props} />
          </div>
        </div>
        <PageScripts />
      </>
    );
  };

  return withLayout;
};

export default WithLayout;
