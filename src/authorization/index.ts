import getBalance, { balanceReady } from '../stake_info/getBalance';
import checkAuth from '../stake_info/checkAuth';
import updateBalance from '../stake_info/updateBalance';
import authCheckReady from './authCheckReady';

const authorize = async (): Promise<void> => {
  if (worker.LoginTry > 3) {
    worker.Helper.WriteLine('Превышен лимит попыток авторизации');
    return;
  }

  await authCheckReady();
  worker.Islogin = checkAuth();
  worker.JSLogined();
  if (worker.Islogin) {
    worker.Helper.WriteLine('Есть авторизация');
    worker.Islogin = true;
    worker.JSLogined();
    const balanceLoaded = await balanceReady();
    if (!balanceLoaded) {
      worker.Helper.WriteLine(`Баланс не появился (${getBalance()})`);
    } else {
      updateBalance();
    }
    return;
  }
  // worker.Helper.WriteLine('Ожидаем загрузку шапки');
  // await getElement('#signInA');
  const usernameInput = document.querySelector('#username') as HTMLInputElement;
  if (!usernameInput) {
    worker.Helper.WriteLine('Не найдено поле ввода логина');
    return;
  }
  const passwordInput = document.querySelector('#password') as HTMLInputElement;
  if (!passwordInput) {
    worker.Helper.WriteLine('Не найдено поле ввода пароля');
    return;
  }
  const signInButton = document.querySelector('#signInBtn') as HTMLElement;
  if (!signInButton) {
    worker.Helper.WriteLine('Не найдена кнопка входа');
    return;
  }
  usernameInput.value = worker.Login;
  passwordInput.value = worker.Password;
  signInButton.click();
  worker.Helper.WriteLine('Авторизуемся');
  worker.LoginTry += 1;
};

export default authorize;
