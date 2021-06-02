import { FC } from 'react';
import Head from 'next/head';
import Theme from '../../../src/components/PipelineForm';

import Page from '../../../src/components/PageFrame';
import { Flex } from 'theme-ui';
import Link from 'next/link';

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Create Pipeline - Wraft Docs</title>
        <meta name="description" content="a nextjs starter boilerplate" />
      </Head>
      <Page>
        <Flex>
          <Link href="/pipelines">
            <a>Back</a>
          </Link>
          <Theme />
        </Flex>
      </Page>
    </>
  );
};

export default Index;