import clearCouponGenerator from '@kot-shrodingera-team/germes-generators/show_stake/clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
// import getMaximumStake from '../stake_info/getMaximumStake';

// const apiClear = (): void => {};

const clearCoupon = clearCouponGenerator({
  // apiClear,
  clearMode: 'all-only',
  clearAllSelector: 'button.bs-bet-clear-betslip__button',
  clearSingleSelector: '',
  getStakeCount,
  // maxUnload: {
  //   getMaximumStake,
  // },
});

export default clearCoupon;
