// import getMaximumStakeGenerator, {
//   maximumStakeReadyGenerator,
// } from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';

import getBalance from './getBalance';

let maximumStake = -1;

export const clearMaximumStake = (): void => {
  maximumStake = -1;
};

export const setMaximumStake = (newMaximumStake: number): void => {
  maximumStake = newMaximumStake;
};

// export const maximumStakeReady = maximumStakeReadyGenerator({
//   maximumStakeElementSelector: '',
// });

// const getMaximumStake = getMaximumStakeGenerator({
//   maximumStakeElementSelector: '',
// });

const getMaximumStake = (): number => {
  if (maximumStake !== -1) {
    return maximumStake;
  }
  return getBalance();
};

export default getMaximumStake;
