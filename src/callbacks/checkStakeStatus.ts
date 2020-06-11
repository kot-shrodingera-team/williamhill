import { log } from '../logger';

export function checkStakeStatus(): boolean {
  const message = document.querySelector('.success-info__message');
  const error = document.querySelector('.error__message-container');
  const errorMessageClose = document.querySelector('.sbk-betslip-bet__locked');
  const errorMessage = document.querySelector('.error__message');

  if (errorMessageClose) {
    log('Ставка закрылась!');
    return false;
  }

  if (message) {
    log('Ставка сделана!');
    return true;
  }

  if (error) {
    log('Ошибка загрузки купона');
    return false;
  }

  if (errorMessage) {
    log('Коэфы сменились');
    return false;
  }
  log('Неизвестная ошибка из checkStakeStatus()');
  return false;
}
