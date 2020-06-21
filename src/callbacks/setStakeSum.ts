import { log } from '../logger';
import { fireEvent } from '@kot-shrodingera-team/config/util';

export function setStakeSum(sum: number): boolean {
  const inputElement = document.querySelector(
    '.slipStake input'
  ) as HTMLInputElement;
  if (inputElement) {
    fireEvent(inputElement, 'keyup');
    inputElement.value = sum.toString();
    fireEvent(inputElement, 'keyup');
    log('Инпут найден.');
    return true;
  }
  log('Инпут не найден!');
  return false;
}
