import updateBalance from '../stake_info/updateBalance';

const checkStakeStatus = (): boolean => {
  const error0 = document.querySelector('#slipError0');
  const slipFooterReturn = document.querySelector('.slipFooter.return');
  if (error0) {
    worker.Helper.WriteLine('Ошибка ставки');
    return false;
  }
  if (slipFooterReturn) {
    worker.Helper.WriteLine('Ставка принята');
    updateBalance();
    return true;
  }
  worker.Helper.WriteLine(
    'Не удалось определить результат ставки. Считаем ставку непринятой'
  );
  return false;
};

export default checkStakeStatus;
