import { log } from '../logger';
import { checkAuth } from './auth';
import { updateBalance, getBalance } from './balance';
import * as api from '../stake_functions';
import { getStakeCount } from '../stake_functions';
import { sleep } from '@kot-shrodingera-team/config/util';
import { setStakeSum } from '../callbacks';

export async function showStake(): Promise<void> {
  if (typeof worker == 'undefined') {
    log('worker не найден! Перезагружаем страницу');
    location.reload();
  }
}

function changeMetricSystem() {
  log('Выбираем метрическую систему decimal.');
  const toggle = document.querySelector('.toggle') as any;
  if (toggle) toggle.children[1].click();
}
