import { WEBSITE_URL } from '@src/components/config/constant';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const PageMetaData = ({ title }: { title?: string }) => {
  const router = useRouter();
  // const noIndexPages = [''];

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='robots' content='INDEX,FOLLOW' />
      <meta name='audience' content='all' />
      <meta name='distribution' content='global' />
      <meta name='copyright' content='Next Quest' />
      <meta http-equiv='Content-Language' content='EN-GB' />
      <meta name='rights-standard' content='NextQuest' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='msapplication-TileColor' content='#000000' />
      {/* {(!isPublished || addNoIndex) && <meta name="robots" content="noindex" />} */}
      <meta name='description' content='Next Quest' />
      <title>Next Quest {title && `| ${title}`}</title>
      <meta name='title' content='Next Quest' />
      <meta name='keywords' content='Next Quest' />
      <meta name='twitter:card' content='Next Quest' />
      <meta name='twitter:title' content='Next Quest' />
      <meta name='twitter:description' content='Next Quest' />
      <meta
        name='twitter:image'
        content={`${WEBSITE_URL}/images/logos/main-logo.svg`}
      />
      <meta name='twitter:label1' content='' />
      <meta name='twitter:label2' content='' />
      <meta name='twitter:data2' content='' />
      <meta property='og:title' content='Next Quest' />
      <meta property='og:description' content='Next Quest' />
      <meta property='og:type' content='' />
      <meta property='fb:app_id' content='' />
      <meta
        property='og:image'
        content={`${WEBSITE_URL}/images/logos/main-logo.svg`}
      />
      <meta property='og:url' content={`${WEBSITE_URL}${router.asPath}`} />
      <link
        key='canonical'
        rel='canonical'
        href={`${WEBSITE_URL}${router.asPath}`}
      />
    </Head>
  );
};

export default PageMetaData;
