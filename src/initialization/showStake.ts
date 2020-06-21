import { log } from '../logger';
import { checkAuth } from './auth';
import { updateBalance, getBalance } from './balance';
import * as api from '../stake_functions';
import { getStakeCount, clearCoupon, awaiter } from '../stake_functions';
import { sleep, getElement } from '@kot-shrodingera-team/config/util';
import { setStakeSum } from '../callbacks';

export async function showStake(): Promise<void> {
  if (typeof worker == 'undefined') {
    log('worker не найден! Перезагружаем страницу');
    location.reload();
  }
  await getElement('.marketHolderExpanded', 3000);
  await getElement('.singleBet', 3000);

  clearCoupon();
  if (getStakeCount() > 0) {
    await getElement('.slipTitle_details a', 2000);
    log('Очищаем купоны');
    clearCoupon();
    await awaiter(() => {
      return getStakeCount() === 0;
    }, 1000);
  }
  await getElement('.contentHolder', 3000);
  updateBalance();
  const couponButton = searchCoupon();
  if (couponButton) {
    log('Кнопка найдена');
    couponButton.click();
    await awaiter(() => {
      return getStakeCount() === 1;
    }, 2000);
    if (getStakeCount() === 1) {
      worker.JSStop();
      log('Кол-во купонов 1');
    } else {
      worker.JSFail();
      log('Открыто больше 1 купона!');
    }
    return;
  } else {
    log('Кнопка не найдена, или страница не успела прогрузиться');
    worker.JSFail();
    return;
  }
}

function searchCoupon() {
  const [betMarket, betName, betParameter] = worker.BetId.split('|');
  const title = [...document.querySelectorAll('.title > span')].find(
    (title) => title.textContent === betMarket
  );
  const table = [...document.querySelectorAll('table')].find((table) =>
    table.contains(title)
  );
  return [...table.querySelectorAll('.eventselection')].find((button) => {
    return button.textContent.includes(betName);
  }) as HTMLDivElement;
}

// function changeMetricSystem() {
//   log('Выбираем метрическую систему decimal.');
//   const toggle = document.querySelector('.toggle') as any;
//   if (toggle) toggle.children[1].click();
// }
