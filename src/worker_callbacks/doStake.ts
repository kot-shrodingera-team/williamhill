import {
  clearStakeProcessingHungMessageSend,
  clearLoadingCounter,
} from './checkCouponLoading';

const doStake = (): boolean => {
  const stakeButton = document.querySelector('#slipBtnPlaceBet') as HTMLElement;

  if (!stakeButton) {
    worker.Helper.WriteLine(
      'Не найдена кнопка "Сделать ставку". Ставку не сделали'
    );
    return false;
  }
  stakeButton.click();
  worker.Helper.WriteLine('Сделали ставку');
  clearLoadingCounter();
  clearStakeProcessingHungMessageSend();
  return true;
};

export default doStake;
