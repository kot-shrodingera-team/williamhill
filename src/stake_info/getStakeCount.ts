const getStakeCount = (): number => {
  return document.querySelectorAll('.singleBet').length;
};

export default getStakeCount;
