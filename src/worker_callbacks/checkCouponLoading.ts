let loadingCounter = 0;
let stakeProcessingHungMessageSend = false;

export const clearLoadingCounter = (): void => {
  loadingCounter = 0;
};
export const clearStakeProcessingHungMessageSend = (): void => {
  stakeProcessingHungMessageSend = false;
};

const checkCouponLoading = (): boolean => {
  if (!stakeProcessingHungMessageSend && loadingCounter > 200) {
    const message =
      `В WilliamHill очень долгое принятие ставки. Возможно зависание\n` +
      `Событие: ${worker.TeamOne} - ${worker.TeamTwo}\n` +
      `Ставка: ${worker.BetName}\n` +
      `Сумма: ${worker.StakeInfo.Summ}\n`;
    worker.Helper.SendInformedMessage(message);
    worker.Helper.WriteLine('Очень долгое принятие ставки. Возможно зависание');
    stakeProcessingHungMessageSend = true;
  }
  loadingCounter += 1;
  const error0 = document.querySelector('#slipError0');
  const slipFooterReturn = document.querySelector('.slipFooter.return');
  if (error0) {
    worker.Helper.WriteLine('Ставка загрузилась с ошибкой');
    return false;
  }
  if (slipFooterReturn) {
    worker.Helper.WriteLine('Ставка загрузилась');
    return false;
  }
  return true;
};

export default checkCouponLoading;
