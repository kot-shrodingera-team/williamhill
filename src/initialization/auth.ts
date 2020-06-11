import { log } from '../logger';

export function auth(logn: string, pass: string): boolean {
  const login = document.querySelector('#ssc-liu') as HTMLInputElement;
  const password = document.querySelector('#ssc-lipw') as HTMLInputElement;
  const button = document.querySelector('#ssc-lis') as HTMLDivElement;
  login.value = logn;
  password.value = pass;
  if (button) {
    button.click();
    log('Кнопка при авторизации нажата.');
    return true;
  } else {
    log('Кнопка при авторизации не найдена.');
    return false;
  }
}

export function checkAuth(): boolean {
  return Boolean(document.querySelector('.ssc-un'));
}
