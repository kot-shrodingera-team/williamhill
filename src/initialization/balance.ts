import { log } from '../logger';

export function getBalance(): number {
  const balance = document.querySelector('#userBalance') as HTMLDivElement;
  if (balance) {
    log('Баланс получен');
    return parseFloat(balance.textContent.replace(/\$/g, ''));
  } else {
    log('Элемент баланса не найден!');
    return 0;
  }
}

export function updateBalance(): void {
  worker.JSBalanceChange(getBalance());
}
