import { log, checkUrl } from '@kot-shrodingera-team/germes-utils';
import { version } from '../package.json';
import showStake from './show_stake';
import { clearMaximumStake } from './stake_info/getMaximumStake';

const fastLoad = async (): Promise<void> => {
  log(`Быстрая загрузка (${version})`, 'steelblue');
  if (!checkUrl()) {
    log('Не на сайте БК. Открываем сайт БК');
    window.location.href = new URL(worker.BookmakerMainUrl).href;
    worker.JSFail();
    return;
  }
  clearMaximumStake();
  showStake();
  // worker.Helper.LoadUrl(worker.EventUrl);
};

export default fastLoad;
