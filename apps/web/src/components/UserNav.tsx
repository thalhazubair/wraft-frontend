import React, { useEffect, Fragment } from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Container } from 'theme-ui';
import { Avatar } from 'theme-ui';

// import Container from '../../src/components/Container';
// relative
import { checkUser } from '../utils/models';

import { UserIcon, BrandLogo } from './Icons';
import Link from './NavLink';

export interface IUser {
  name: string;
}

const UserNav = () => {
  // const [user, setUser] = useState<IUser>();
  const router = useRouter();
  const setToken = useStoreActions((actions: any) => actions.auth.addToken);
  const setProfile = useStoreActions(
    (actions: any) => actions.profile.updateProfile,
  );
  const userLogout = useStoreActions((actions: any) => actions.auth.logout);
  const token = useStoreState((state) => state.auth.token);
  const profile = useStoreState((state) => state.profile.profile);

  const onProfileLoad = (data: any) => {
    setProfile(data);

    if (data === 'x') {
      setProfile(data);
      // setUser(data);
    }
  };

  const onUserLogout = () => {
    userLogout();
    router.push('/');
  };

  useEffect(() => {
    // check if token is there
    const t = cookie.get('token') || false;
    // login to check
    if (t) {
      // if(t === '') {
      //   checkUser(t, onProfileLoad)
      // }
      checkUser(t, onProfileLoad);
      setToken(t);
    }
    // check if cooke token is present
    // if so set it as state, and then call the user object
  }, []);

  return (
    <Box
      sx={{
        bg: 'background',
        // borderBottom: 'solid 1px',
        // borderColor: 'border',
        py: 2,
      }}>
      <Container>
        <Flex sx={{ py: 3, px: 4, alignItems: 'center' }}>
          <Box sx={{ a: { p: 0, letterSpacing: 0 } }}>
            <Link href={token ? '/user-profile' : '/'}>
              <Box sx={{ color: `gray.0`, fill: 'gray.1000' }}>
                <BrandLogo width="6rem" height="2rem" />
              </Box>
            </Link>
          </Box>

          <Box sx={{ ml: 'auto' }}>
            <Flex>
              {!token && (
                <Fragment>
                  <Link href="/signup">
                    <Text
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: 2,
                        fontWeight: 900,
                        color: '#343E49',
                      }}>
                      Join Wraft
                    </Text>
                  </Link>
                  <Link href="/pricing">
                    <Text
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: 2,
                        fontWeight: 900,
                        color: '#343E49',
                      }}>
                      Pricing
                    </Text>
                  </Link>

                  <Link href="/signup">
                    <Text
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: 2,
                        fontWeight: 900,
                        color: '#343E49',
                      }}>
                      Features
                    </Text>
                  </Link>
                  <Link href="/login">
                    <Text
                      sx={{
                        fontSize: 2,
                        bg: '#087F5B',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: `4px`,
                        px: 4,
                        py: 2,
                        ml: 4,
                      }}>
                      Login
                    </Text>
                  </Link>
                </Fragment>
              )}
              {token && token !== '' && (
                <Flex ml={2} sx={{ alignContent: 'flex-start' }}>
                  {profile && (
                    <Text ml={2} pt={2} mr={3}>
                      {profile.name}
                    </Text>
                  )}
                  {profile && profile.profile_pic?.length > 0 && (
                    <Avatar
                      sx={{ height: '64px', width: '64px' }}
                      onClick={onUserLogout}
                      src={profile.profile_pic}
                    />
                  )}
                  {profile && profile.profile_pic === null && <UserIcon />}
                </Flex>
              )}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default UserNav;