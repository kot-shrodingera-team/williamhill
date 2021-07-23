import checkStakeEnabledGenerator from '@kot-shrodingera-team/germes-generators/stake_info/checkStakeEnabled';
import { log } from '@kot-shrodingera-team/germes-utils';
import getStakeCount from './getStakeCount';

const preCheck = (): boolean => {
  const betLabel = document.querySelector(
    '.bs-bet-price__container .bs-bet-label'
  );
  if (/Susp/i.test(betLabel.textContent.trim())) {
    log('Ставка недоступна (Suspended)', 'crimson');
    return false;
  }
  return true;
};

const checkStakeEnabled = checkStakeEnabledGenerator({
  getStakeCount,
  preCheck,
  // betCheck: {
  //   selector: '',
  //   errorClasses: [
  //     {
  //       className: '',
  //       message: '',
  //     },
  //   ],
  // },
  // errorsCheck: [
  //   {
  //     selector: '',
  //     message: '',
  //   },
  // ],
});

export default checkStakeEnabled;
