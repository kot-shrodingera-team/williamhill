export function auth(login: string, pass: string) {
  const userName = document.querySelector('#username') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  const logInBtn = document.querySelector('#signInBtn') as HTMLDivElement;
  userName.value = login;
  password.value = pass;
  logInBtn.click();
}

export function checkAuth(): boolean {
  return Boolean(document.querySelector('.userHighlight'));
}
