import { log } from '../logger';
let counter = 0;
export function checkCouponLoading(): boolean {
  if (counter === 5) {
    log('Исчерпан лимит попыток загрузки купона.');
    return false;
  }
  const errorMessage = document.querySelector('.error__message');
  const errorMessageClose = document.querySelector('.sbk-betslip-bet__locked');
  const loadingButton = document.querySelector(
    '.placing-bets__loading-container'
  );
  const goodMessage = document.querySelector('.success-info__message');
  if (errorMessageClose) {
    log('Ставка недоступна!');
    return false;
  }
  if (errorMessage) {
    log('Сменились коэфы');
    return false;
  }
  if (loadingButton) {
    return true;
  }

  if (goodMessage) {
    log('Загрузка купона окончена');
    return false;
  } else {
    counter++;
    return true;
  }
}
