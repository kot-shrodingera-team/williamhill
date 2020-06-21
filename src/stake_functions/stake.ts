import { log } from '../logger';
import { setStakeSum } from '../callbacks/setStakeSum';
import { getBalance } from '../initialization/balance';

export function getMinStake(): number {
  return 0.04;
}

export function getMaxStake(): number {
  return getBalance();
}

export function clearCoupon(): void {
  (document.querySelector('.slipTitle_details a') as HTMLDivElement).click();
}

export function getStakeCount(): number {
  return document.querySelectorAll('.singleBet').length;
}

export function getSumFromStake(): number {
  const input = document.querySelector('.slipStake input') as HTMLInputElement;
  if (input) {
    log('Получили сумму из купона');
    return Number(input.value);
  }
  log(`Инпут не найден getSumFromStake`);
  return 0;
}

export function getCoefFromCoupon(): number {
  const coef = document.querySelector('.slipName span');
  if (!coef) {
    log('Ошибка парсинга коэффициента, коэффициент не найден.');
    return NaN;
  }
  if (isNaN(Number(coef.textContent))) {
    log(`Коэффициент не удалось распарсить в число: ${coef.textContent}`);
    return NaN;
  }
  return Number(coef.textContent);
}

export function getParametrFromCoupon(): number {
  const regexPattern = new RegExp(
    String.raw`^.*\s+\(?([-+]?\d+(?:\.\d+)?)\)?\s+@`
  );
  const name = document.querySelector('.slipName').textContent;
  const regexMatch = name.match(regexPattern);
  if (regexMatch) {
    log('Нашли параметр');
    return Number(regexMatch[1]);
  }
  log('Параметр -6666');
  return -6666;
}

export function checkIsEnabled(): boolean {
  return Boolean(!document.querySelector('.error__message-container'));
}

export async function awaiter(
  condition: any,
  timeout = 3000,
  interval = 4,
  logger = false
) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const start_time = Date.now();
    const check = () => {
      const result = condition();
      if (result) {
        if (logger) {
          console.log('awaiter result is not falsy');
          console.log(result);
        }
        resolve(result);
        // eslint-disable-next-line @typescript-eslint/camelcase
      } else if (Date.now() > start_time + timeout) {
        console.log('awaiter timeout');
        resolve(null);
      } else {
        setTimeout(check, interval);
      }
    };
    check();
  });
}
