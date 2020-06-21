import { log } from '../logger';
import { auth, checkAuth } from './auth';
import { updateBalance } from './balance';
import { awaiter } from '../stake_functions';
import { getElement } from '@kot-shrodingera-team/config/util';

export async function init(): Promise<void> {
  if (worker.LoginTry > 3) {
    log('Превышен лимит попыток авторизации');
    worker.Islogin = false;
    return;
  }

  if (checkAuth()) {
    log('Вы успешно авторизованы');
    worker.Islogin = true;
    worker.JSLogined();
    await getElement('.mainBalance', 3000);
    updateBalance();
    return;
  } else {
    log('Ожидаем загрузку шапки');
    await getElement('#signInA', 3000);
    auth(worker.Login, worker.Password);
    log('Попытка авторизоваться № ' + worker.LoginTry);
    worker.LoginTry++;
    return;
  }
}
