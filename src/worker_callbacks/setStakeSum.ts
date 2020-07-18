import { fireEvent } from '@kot-shrodingera-team/config/util';

const setStakeSum = (sum: number): boolean => {
  worker.Helper.WriteLine(`Вводим сумму ставки: ${sum}`);
  const inputElement = document.querySelector(
    '.slipStake input'
  ) as HTMLInputElement;
  if (!inputElement) {
    worker.Helper.WriteLine('Поле ввода ставки не найдено');
    return false;
  }
  fireEvent(inputElement, 'keyup');
  inputElement.value = sum.toString();
  fireEvent(inputElement, 'keyup');
  worker.StakeInfo.Summ = sum;
  return true;
};

export default setStakeSum;
