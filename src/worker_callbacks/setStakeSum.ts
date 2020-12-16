import setStakeSumGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/setStakeSum';
import { log, sleep } from '@kot-shrodingera-team/germes-utils';

let isClearingStakeSum = false;

const clearStakeSum = async (): Promise<void> => {
  const inputElement = document.querySelector(
    'input.bs-bet-stake__input'
  ) as HTMLInputElement;
  if (!inputElement) {
    isClearingStakeSum = false;
    return;
  }
  inputElement.focus();
  const keyFunction = Api.DomEventsHelper.KeyDown;

  if (inputElement.value) {
    isClearingStakeSum = true;
    while (inputElement.value) {
      const oldValue = inputElement.value;
      keyFunction(8);
      // eslint-disable-next-line no-await-in-loop
      await sleep(20);
      const newValue = inputElement.value;
      if (!newValue) {
        log('Очистили поле ввода суммы ставки', 'orange');
        isClearingStakeSum = false;
        return;
      }
      if (oldValue === newValue) {
        log(
          `Ошибка очистки поля ввода суммы ставки, значение не изменилось (${newValue})`,
          'crimson'
        );
        isClearingStakeSum = false;
        return;
      }
    }
  }
  log('Поле ввода суммы ставки пусто', 'steelblue');
  isClearingStakeSum = false;
};

const preInputCheck = (): boolean => {
  if (isClearingStakeSum) {
    log('Поле ввода суммы ставки очищается', 'crimson');
    return false;
  }
  const inputElement = document.querySelector(
    'input.bs-bet-stake__input'
  ) as HTMLInputElement;
  if (inputElement && inputElement.value) {
    log('Поле ввода суммы ставки не пустое, очищаем', 'orange');
    clearStakeSum();
    return false;
  }
  return true;
};

const setStakeSum = setStakeSumGenerator({
  preInputCheck,
  sumInputSelector: 'input.bs-bet-stake__input',
  alreadySetCheck: true,
  inputType: 'nativeInput',
});

export default setStakeSum;
