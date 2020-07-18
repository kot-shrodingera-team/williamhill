import './workerCheck';
import { pipeHwlToConsole } from '@kot-shrodingera-team/config/util';
import getStakeInfo from './worker_callbacks/getStakeInfo';
import setStakeSum from './worker_callbacks/setStakeSum';
import doStake from './worker_callbacks/doStake';
import checkCouponLoading from './worker_callbacks/checkCouponLoading';
import checkStakeStatus from './worker_callbacks/checkStakeStatus';
import authorize from './authorization';
import showStake from './show_stake';

pipeHwlToConsole();

(async (): Promise<void> => {
  worker.Helper.WriteLine('Начали');
  if (!worker.IsShowStake) {
    authorize();
  } else {
    showStake();
  }
})();

worker.SetCallBacks(
  console.log,
  getStakeInfo,
  setStakeSum,
  doStake,
  checkCouponLoading,
  checkStakeStatus
);
