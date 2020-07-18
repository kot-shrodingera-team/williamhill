const checkStakeEnabled = (): boolean => {
  const errorMessage = document.querySelector('.error__message-container');
  return Boolean(errorMessage);
};

export default checkStakeEnabled;
