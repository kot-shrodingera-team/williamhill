import '@kot-shrodingera-team/worker-declaration/workerCheck';
import { log, getElement } from '@kot-shrodingera-team/germes-utils';
import getStakeInfo from './worker_callbacks/getStakeInfo';
import setStakeSum from './worker_callbacks/setStakeSum';
import doStake from './worker_callbacks/doStake';
import checkCouponLoading from './worker_callbacks/checkCouponLoading';
import checkStakeStatus from './worker_callbacks/checkStakeStatus';
import afterSuccesfulStake from './worker_callbacks/afterSuccesfulStake';
import fastLoad from './fastLoad';
import initialize from './initialization';
import showStake from './show_stake';

window.consoleCopy = { ...console };

// Object.defineProperty(window, 'console', {
//   writable: false,
// });

// Object.freeze(window.console);

worker.SetCallBacks(
  log,
  getStakeInfo,
  setStakeSum,
  doStake,
  checkCouponLoading,
  checkStakeStatus,
  afterSuccesfulStake
);

worker.SetFastCallback(fastLoad);

(async (): Promise<void> => {
  log(`Загрузка страницы`, 'steelblue');
  if (!window.location.href.includes('sports.williamhill.com/betting')) {
    log('Открыта не новая версия сайта. Переходим на неё', 'orange');
    window.location.href = `sports.williamhill.com/betting/`;
    return;
  }
  if (!worker.IsShowStake) {
    initialize();
  } else {
    const betslipButton = await getElement(
      'button[data-test-id="betslip"]',
      15000
    );
    if (!betslipButton) {
      log('Не дождались появления кнопки купона', 'red');
      worker.JSFail();
    } else {
      showStake();
    }
  }
})();
