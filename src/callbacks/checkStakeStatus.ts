import { log } from '../logger';
import { updateBalance } from '../initialization';

export function checkStakeStatus(): boolean {
  const error0 = document.querySelector('#slipError0');
  const slipFooterReturn = document.querySelector('.slipFooter.return');
  if (error0) {
    log('Ошибка проставки ');

    return false;
  }
  if (slipFooterReturn) {
    log('Ставка успешная');
    updateBalance();
    return true;
  }
}
