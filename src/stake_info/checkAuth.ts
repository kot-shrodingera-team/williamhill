import checkAuthGenerator, {
  authStateReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/checkAuth';

export const authCheckReady = authStateReadyGenerator({
  // noAuthElementSelector: 'body:not(.logged-in) #accountTabButton',
  noAuthElementSelector: '.action-login__button',
  // authElementSelector: 'body.logged-in #accountTabButton',
  authElementSelector: '.cp-ma-myaccount-dropdown-button',
  // maxDelayAfterNoAuthElementAppeared: 5000,
  logging: true,
});

const checkAuth = checkAuthGenerator({
  // authElementSelector: 'body.logged-in #accountTabButton',
  authElementSelector: '.cp-ma-myaccount-dropdown-button',
});

export default checkAuth;
