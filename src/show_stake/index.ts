import {
  log,
  awaiter,
  getElement,
  sleep,
} from '@kot-shrodingera-team/germes-utils';
import clearCoupon from './clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
import { updateBalance } from '../stake_info/getBalance';
import setBetAcceptMode from './setBetAcceptMode';

let couponOpenning = false;

export const isCouponOpenning = (): boolean => couponOpenning;

const jsFail = (message = ''): void => {
  if (message) {
    log(message, 'red');
  }
  couponOpenning = false;
  worker.JSFail();
};

const showStake = async (): Promise<void> => {
  const [a, b, selectionId, c] = worker.BetId.split('|');

  const betslipButton = document.querySelector(
    'button[data-test-id="betslip"]'
  );
  if (!betslipButton) {
    jsFail('Не найдена кнопка купона');
    return;
  }

  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    jsFail('Не удалось очистить купон');
    return;
  }
  updateBalance();

  WH.messageBus.publish('betslip.leg.add', {
    handicapValue: 0.5,
    legSort: '--',
    priceDenominator: 1,
    priceNumerator: 1,
    priceType: 'L',
    selectionId,
  });

  const betAdded = await awaiter(() => getStakeCount() === 1);
  if (!betAdded) {
    log('Ставка не попала в купон', 'red');
    jsFail();
    return;
  }
  log('Ставка успешно открыта', 'green');
  setBetAcceptMode();
  couponOpenning = false;
  worker.JSStop();
};

export const initialShowStake = async (): Promise<void> => {
  const betslipButton = await getElement('button[data-test-id="betslip"]');
  if (!betslipButton) {
    jsFail('Не найдена кнопка купона');
    return;
  }
  await Promise.race([
    getElement('button[data-test-id="betslip"]:not([disabled])'),
    sleep(3000),
  ]);
  showStake();
};

export default showStake;
