export const LINK_HOME = '/';
export const LINK_TEST_PAGE = '/test-page';
export const LINK_SIGN_UP = '/signup';
export const LINK_SIGN_IN = '/signin';
export const LINK_SIGN_OUT = '/signout';

export const noRenderListIfLoggedIn = [LINK_SIGN_UP, LINK_SIGN_IN];
export const noRenderListIfLoggedOut = [LINK_SIGN_OUT];

export default {
  [LINK_HOME]: { text: 'Home', link: LINK_HOME },
  [LINK_TEST_PAGE]: { text: 'Test Page', link: LINK_TEST_PAGE },
  [LINK_SIGN_UP]: { text: 'Sign Up', link: LINK_SIGN_UP },
  [LINK_SIGN_IN]: { text: 'Sign In', link: LINK_SIGN_IN },
  [LINK_SIGN_OUT]: { text: 'Sign Out', link: LINK_SIGN_OUT },
};
