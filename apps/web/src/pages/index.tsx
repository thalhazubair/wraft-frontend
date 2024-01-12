import { FC, useEffect, useState } from 'react';

import { useStoreState } from 'easy-peasy';
import cookie from 'js-cookie';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Text, Box, Flex, Button } from 'theme-ui';

import Dashboard from '../components/Dashboard';
import Page from '../components/PageFrame';
import UserNav from '../components/UserNav';

// import UserHome from '../components/UserHome';

export const API_HOST =
  process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:4000';

const UserHome = dynamic(() => import('../components/UserHome'), {
  ssr: false,
});

const Index: FC = () => {
  const [isTeamInvite, setIsTeamInvite] = useState(false);
  const token = useStoreState((state) => state.auth.token);
  const [organisationName, setOrganisationName] = useState<string | null>(null);
  const inviteCookie = cookie.get('inviteCookie');

  useEffect(() => {
    if (inviteCookie) {
      const retrievedObject = JSON.parse(inviteCookie);
      setOrganisationName(retrievedObject.inviteOrganisation);
      setIsTeamInvite(true);
    }
  }, [inviteCookie]);

  const handleClick = async (event: React.FormEvent) => {
    event.preventDefault();
    // Parse the JSON string back into an object
    if (inviteCookie) {
      const retrievedObject = JSON.parse(inviteCookie);
      console.log(retrievedObject.inviteToken);
      const formData = new FormData();
      formData.append('token', retrievedObject.inviteToken);

      try {
        // Create a new FormData object
        const formData = new FormData();
        formData.append('token', retrievedObject.inviteToken);

        // Send the FormData object in the POST request
        const response = await fetch(`${API_HOST}/api/v1/join_organisation`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`, // Add your authorization token here
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Errorq:', errorData);
          // You can also throw a custom error if needed
          throw new Error('Team joining failed');
        } else {
          // Handle a successful response (if needed)
          const responseData = await response;
          console.log(responseData);
          setIsTeamInvite(false);
          cookie.remove('inviteCookie');
          // setResetPasswordSuccess(responseData);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('Network error:', error);
        cookie.remove('inviteCookie');
        // setResetPasswordSuccess(undefined);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Wraft - The Document Automation Platform</title>
        <meta
          name="description"
          content="Wraft is a document automation and pipelining tools for businesses"
        />
      </Head>
      {!token && (
        <Box>
          <UserNav />
          <UserHome />
        </Box>
      )}
      {token && (
        <Page>
          <Dashboard />
        </Page>
      )}
      {token && isTeamInvite && (
        <Flex
          sx={{
            flexDirection: 'column',
            py: '24px',
            px: '32px',
            width: '342px',
            height: '205px',
            border: '1px solid #E4E9EF',
            borderRadius: '4px',
            position: 'absolute',
            top: '38%',
            left: '38%',
            zIndex: '10',
            background: '#FFF',
            alignItems: 'center',
          }}>
          <Text
            sx={{
              marginTop: '23px',
              mb: '18px',
              textAlign: 'center',
              fontWeight: 'heading',
              color: 'gray.600',
            }}>
            {organisationName !== null
              ? `you have a team invite from ${organisationName}. Accept?`
              : ''}
          </Text>
          <Flex sx={{ gap: '12px' }}>
            <Button onClick={handleClick}>Confirm</Button>

            <Button
              onClick={() => {
                setIsTeamInvite(false);
                cookie.remove('inviteCookie');
              }}
              sx={{ bg: 'red', color: 'white' }}>
              Cancel
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
};
export default Index;