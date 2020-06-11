import { log } from '../logger';
import { auth, checkAuth } from './auth';
import { updateBalance } from './balance';
import { awaiter } from '../stake_functions';

export async function init(): Promise<void> {
  if (worker.LoginTry > 3) {
    log('Превышен лимит попыток авторизации');
    worker.Islogin = false;
    return;
  }
  await awaiter(waitPage);
  if (checkAuth()) {
    log('Вы успешно авторизованы');
    worker.Islogin = true;
    worker.JSLogined();
    updateBalance();
    return;
  } else {
    auth(worker.Login, worker.Password);
    log('Попытка авторизоваться № ' + worker.LoginTry);
    worker.LoginTry++;
    return;
  }
}

function waitPage(): Boolean {
  return Boolean(document.querySelector('.ssc-ilo'));
}
