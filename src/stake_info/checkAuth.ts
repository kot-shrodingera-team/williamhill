function checkAuth(): boolean {
  const userHighlight = document.querySelector('.userHighlight');
  return Boolean(userHighlight);
}

export default checkAuth;
