import { FC } from 'react';

import Head from 'next/head';
import { Box, Flex } from 'theme-ui';

import OrgForm from '../../components/OrgForm';
import OrgSidebar from '../../components/OrgSidebar';
import Page from '../../components/PageFrame';
import PageHeader from '../../components/PageHeader';

const CompanyForm: FC = () => {
  return (
    <>
      <Head>
        <title>Manage Organization | Wraft Doc</title>
        <meta name="description" content="Wraft Docs" />
      </Head>
      <Page>
        <PageHeader title="Settings" desc="">
          <Box sx={{ ml: 'auto' }} />
        </PageHeader>
        <Flex sx={{ px: 4 }}>
          <OrgSidebar />
          <Box pl={4}>
            <OrgForm />
          </Box>
        </Flex>
      </Page>
    </>
  );
};

export default CompanyForm;