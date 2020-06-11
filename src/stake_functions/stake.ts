import { log } from '../logger';
import { setStakeSum } from '../callbacks/setStakeSum';
import { getBalance } from '../initialization/balance';

export function getMinStake(): number {
  return 1;
}

export function getMaxStake(): number {
  const maxBetErrorMessage = document.querySelector(
    '.sbk-betslip-bet__messages--error a'
  );
  if (maxBetErrorMessage) {
    log('Берем max из сообщения об ошибке в купоне');
    return Number(maxBetErrorMessage.textContent.slice(1));
  }

  return Number(getBalance());
}
export function clearCoupon(): void {
  const clearButton = document.querySelector(
    '.button.button--cancel.clear-all-bets'
  ) as HTMLButtonElement;
  if (clearButton) {
    clearButton.click();
  }
}

export function checkStakeLoad(): boolean {
  return Boolean(document.querySelector('.sbk-betslip-single__content'));
}

export function checkMarketLoad(): boolean {
  return Boolean(document.querySelector('.grid.cards'));
}

export function getStakeCount(): number {
  log(`Получен ${getStakeCount.name}`);
  return document.querySelectorAll('.sbk-betslip-single__content').length;
}

export function getSumFromStake(): number {
  const input = document.querySelector(
    '.input-text-wrapper input'
  ) as HTMLInputElement;
  if (input) {
    log('Получили сумму из купона');
    return Number(input.value);
  }
  log(`Инпут не найден ${getSumFromStake.name}`);
  return 0;
}
export function getCoefFromCoupon(): number {
  const coef = document.querySelector('.odds__value.odds__value--original');
  if (!coef) {
    log('Ошибка парсинга коэффициента, коэффициент не найден.');
    return 0;
  }
  if (isNaN(Number(coef.textContent))) {
    log(`Коэффициент не удалось распарсить в число: ${coef.textContent}`);
    return 0;
  }
  return Number(coef.textContent);
}

export function getParametrFromCoupon(): number {
  if (document.querySelector('.sbk-betslip-single__content')) {
    const handicap = document.querySelector('.handicap__value');
    if (handicap) {
      log('Параметр найден.');
      return parseFloat(handicap.textContent.substr(1));
    }
    const handicap1 = document.querySelector('.single-info__selection__name');
    if (handicap1) {
      log('Обычный параметр не найден ищем в названии.');
      const param = parseFloat(handicap1.textContent.split('(')[1]);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(param)) return -6666;
      return param;
    }
  }
  log('Купон для получения параметра не найден.');
  return NaN;
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
