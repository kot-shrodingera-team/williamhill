import getBalance from './getBalance';

const updateBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default updateBalance;
