import { log } from '../logger';

export function getBalance(): number {
  const balance = document.querySelector(
    'tr:nth-child(1) > td.ssc-wla'
  ) as HTMLDivElement;
  if (balance) {
    log('Баланс получен');
    return parseFloat(balance.textContent.substr(1));
  } else {
    log('Элемент баланса не найден!');
    return 0;
  }
}

export function updateBalance(): void {
  worker.JSBalanceChange(getBalance());
}
