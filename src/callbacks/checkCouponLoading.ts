import { log } from '../logger';

let loadingCounter = 0;

export function checkCouponLoading(): boolean {
  log('Идет загрузка купона!');
  if (loadingCounter > 200) {
    log('Зависла загрузка!');
    return false;
  }
  loadingCounter++;
  const error0 = document.querySelector('#slipError0');
  const slipFooterReturn = document.querySelector('.slipFooter.return');
  if (error0) {
    log('Ставка загрузилась с ошибкой');
    return false;
  }
  if (slipFooterReturn) {
    log('Ставка загрузилась');
    return false;
  }
  return true;
}
