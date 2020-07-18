import { awaiter, getElement } from '@kot-shrodingera-team/config/util';
import getStakeCount from '../stake_info/getStakeCount';

const clearCoupon = async (): Promise<boolean> => {
  const couponLoaded = await getElement('.slipLoading.displayNone');
  if (!couponLoaded) {
    worker.Helper.WriteLine('Не дождались загрузки купона');
    return false;
  }
  if (getStakeCount() !== 0) {
    worker.Helper.WriteLine('Купон не пуст. Очищаем');
    const clearButton = document.querySelector(
      '.slipTitle_details a'
    ) as HTMLElement;
    if (!clearButton) {
      worker.Helper.WriteLine('Не найдена кнопка очистки купона');
      return false;
    }
    clearButton.click();
    const couponCleared = Boolean(await awaiter(() => getStakeCount() === 0));
    if (couponCleared) {
      worker.Helper.WriteLine('Купон очищен');
      return true;
    }
    return false;
  }
  worker.Helper.WriteLine('Купон пуст');
  return true;
};

export default clearCoupon;
