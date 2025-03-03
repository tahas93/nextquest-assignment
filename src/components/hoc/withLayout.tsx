import PageHead from '@src/components/common/PageHead';
import PageMetaData from '@src/components/common/PageMetaData';
import { PageScripts } from '@src/components/common/PageScripts';
import React from 'react';

const WithLayout = (
  ComposedComponent: any,
  pageName: string,
  title?: string
) => {
  const withLayout = (props: any) => {
    return (
      <>
        <PageHead />
        <PageMetaData title={title} />
        <ComposedComponent {...props} />
        <PageScripts />
      </>
    );
  };

  return withLayout;
};

export default WithLayout;
