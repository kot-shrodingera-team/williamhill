const getCoefficient = (): number => {
  const coefficientElement = document.querySelector('.slipName span');
  if (!coefficientElement) {
    worker.Helper.WriteLine('Коэффициент не найден');
    return 0;
  }
  const coefficientText = coefficientElement.textContent.trim();
  const coefficient = Number(coefficientText);
  if (Number.isNaN(coefficient)) {
    worker.Helper.WriteLine(
      `Непонятный формат коэффициента: ${coefficientText}`
    );
    return 0;
  }
  return coefficient;
};

export default getCoefficient;
