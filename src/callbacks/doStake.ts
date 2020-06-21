import { log } from '../logger';
import { getCoefFromCoupon, getSumFromStake } from '../stake_functions';

export function doStake(): boolean {
  const stakeButton = document.querySelector(
    '#slipBtnPlaceBet'
  ) as HTMLDivElement;

  if (stakeButton) {
    stakeButton.click();
    log('Нажимаем на кнопку "Сделать ставку"');
    return true;
  }
  log('Кнопка "Сделать ставку" - не найдена');
  return false;
}
