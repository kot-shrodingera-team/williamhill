const getParameter = (): number => {
  const parameterRegex = new RegExp(
    String.raw`^.*\s+\(?([-+]?\d+(?:\.\d+)?)\)?\s+@`
  );
  const betNameElement = document.querySelector('.slipName');
  if (!betNameElement) {
    worker.Helper.WriteLine('Не найдена роспись ставки');
    return -9999;
  }
  const betName = betNameElement.textContent.trim();
  const parameterMatch = betName.match(parameterRegex);
  if (parameterMatch) {
    return Number(parameterMatch[1]);
  }
  return -6666;
};

export default getParameter;
