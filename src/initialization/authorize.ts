import authorizeGenerator from '@kot-shrodingera-team/germes-generators/initialization/authorize';
import { updateBalance, balanceReady } from '../stake_info/getBalance';
// import afterSuccesfulLogin from './afterSuccesfulLogin';

// const changeToPhoneLogin = async (): Promise<boolean> => {
//   return true;
// };

const authorize = authorizeGenerator({
  openForm: {
    // selector: 'body:not(.logged-in) #accountTabButton',
    selector: '.action-login__button',
    // openedSelector: '#accountTabButton.-expanded',
    openedSelector: '[data-test-id="login-component"]',
    // afterOpenDelay: 1000,
  },
  // phoneLogin: {
  //   changeToPhoneLogin,
  //   phoneInputSelector: '',
  // },
  // loginInputSelector: 'input#loginUsernameInput',
  loginInputSelector: 'input[name="username"]',
  // passwordInputSelector: 'input#loginPasswordInput',
  passwordInputSelector: 'input[name="password"]',
  // submitButtonSelector: 'button#loginButton',
  submitButtonSelector: 'button[name="login-submit-button"]',
  inputType: 'react',
  // beforeSubmitDelay: 0,
  // captchaSelector: '',
  loginedWait: {
    loginedSelector: '.cp-ma-myaccount-dropdown-button',
    balanceReady,
    updateBalance,
  },
  // afterSuccesfulLogin,
});

export default authorize;
