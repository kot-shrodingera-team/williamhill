const findBet = (): HTMLElement => {
  const [betMarket, betName /* , betParameter */] = worker.BetId.split('|');
  const marketTitle = [...document.querySelectorAll('.title > span')].find(
    (title) => title.textContent === betMarket
  );
  if (!marketTitle) {
    worker.Helper.WriteLine(
      `Не найден заголовок нужного маркета (${betMarket})`
    );
    return null;
  }
  const marketTable = [...document.querySelectorAll('table')].find((table) =>
    table.contains(marketTitle)
  );
  if (!marketTable) {
    worker.Helper.WriteLine(`Не найден нужный маркет (${betMarket})`);
    return null;
  }
  const bet = [...marketTable.querySelectorAll('.eventselection')].find(
    (button) => {
      return button.textContent.includes(betName);
    }
  ) as HTMLElement;
  if (!bet) {
    worker.Helper.WriteLine(`Не найдена нужная ставка (${betName})`);
    return null;
  }
  worker.Helper.WriteLine('Ставка найдена');
  console.log(bet);
  return bet;
};

export default findBet;
