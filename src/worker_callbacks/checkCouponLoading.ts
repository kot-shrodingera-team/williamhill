import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import { log } from '@kot-shrodingera-team/germes-utils';
import { getDoStakeTime } from '../stake_info/doStakeTime';

const check = () => {
  const loadingIcon = document.querySelector('#LOADING');
  if (loadingIcon) {
    log('Обработка ставки (есть иконка)', 'tan');
    return true;
  }
  const successIcon = document.querySelector('#SUCCESS');
  if (successIcon) {
    log('Обработка ставки завершена (ставка принята (иконка))', 'orange');
    return false;
  }
  const priceChangeIcon = document.querySelector('#PRICE_CHANGE');
  if (priceChangeIcon) {
    log('Обработка ставки завершена (изменение коэффициента)', 'orange');
    return false;
  }
  const suspendedIcon = document.querySelector('#SUSPENDED');
  if (suspendedIcon) {
    log('Обработка ставки завершена (ставка недоступна)', 'orange');
    return false;
  }
  const maxStakeIcon = document.querySelector('#MAX_STAKE_ONE_BET');
  if (maxStakeIcon) {
    log('Обработка ставки завершена (превышена максимальная ставка)', 'orange');
    return false;
  }
  const receiptHeaderElement = document.querySelector(
    '.bs-receipt-header__title'
  );
  if (receiptHeaderElement) {
    const receiptHeader = receiptHeaderElement.textContent.trim();
    if (/Bet Placed/i.test(receiptHeader)) {
      log('Обработка ставки завершена (ставка принята (Bet Placed))', 'orange');
      return false;
    }
    log(
      `Обработка ставки завершена (результат ставки: "${receiptHeader}")`,
      'orange'
    );
    return false;
  }
  const betProcessingFooterElement = document.querySelector(
    '.bs-bet-processing__footer'
  );
  if (betProcessingFooterElement) {
    const betProcessingFooter = betProcessingFooterElement.textContent.trim();
    if (/Please wait, your bet is being processed/i.test(betProcessingFooter)) {
      log('Обработка ставки (нет иконки, но есть текст)', 'tan');
      return true;
    }
    log(
      `Обработка ставки завершена (ошибка ставки: "${betProcessingFooter}")`,
      'orange'
    );
    return false;
  }
  log('Обработка ставки (нет иконки)', 'tan');
  return true;
};

const checkCouponLoading = checkCouponLoadingGenerator({
  bookmakerName: 'William Hill',
  getDoStakeTime,
  check,
});

export default checkCouponLoading;
