import { getElement, awaiter } from '@kot-shrodingera-team/config/util';
import clearCoupon from './clearCoupon';
import updateBalance from '../stake_info/updateBalance';
import findBet from './findBet';
import getStakeCount from '../stake_info/getStakeCount';

const showStake = async (): Promise<void> => {
  // await getElement('.marketHolderExpanded', 3000);
  // await getElement('.singleBet', 3000);
  // await getElement('.eventselection');

  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    worker.Helper.WriteLine('Не удалось очистить купон');
    worker.JSFail();
    return;
  }
  // await getElement('.contentHolder', 3000);
  updateBalance();
  const couponButton = findBet();
  if (!couponButton) {
    worker.JSFail();
    return;
  }
  couponButton.click();
  const betAdded = await awaiter(() => getStakeCount() === 1);
  if (!betAdded) {
    worker.Helper.WriteLine('Ставка не попала в купон');
    worker.JSFail();
    return;
  }
  worker.Helper.WriteLine('Ставка успешно открыта');
  worker.JSStop();
};

export default showStake;
