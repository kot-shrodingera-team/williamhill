import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getBalance';

export const balanceReady = balanceReadyGenerator({
  // balanceSelector: 'body.logged-in .account-tab__text',
  balanceSelector: '.cp-ma-myaccount-dropdown-button__balance',
});

const getBalance = getBalanceGenerator({
  // balanceSelector: 'body.logged-in .account-tab__text',
  balanceSelector: '.cp-ma-myaccount-dropdown-button__balance',
});

export const updateBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default getBalance;
