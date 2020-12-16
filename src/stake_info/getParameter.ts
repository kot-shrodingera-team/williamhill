import { log } from '@kot-shrodingera-team/germes-utils';

const getParameter = (): number => {
  const selectionHandicapElement = document.querySelector(
    '.bs-selection-description__handicap'
  );
  if (selectionHandicapElement) {
    const selectionHandicap = Number(
      selectionHandicapElement.textContent.trim()
    );
    return selectionHandicap;
  }
  const selectionDescriptionElement = document.querySelector(
    '.bs-selection-description__title'
  );
  if (!selectionDescriptionElement) {
    log('Не найдена роспись ставки', 'crimson');
    return -9999;
  }
  const selectionDescription = selectionDescriptionElement.textContent.trim();
  const totalMatch = selectionDescription.match(
    /(Over|Under)\s+(\d+(?:\.\d+)?)/i
  );
  if (totalMatch) {
    return Number(totalMatch[1]);
  }
  return -6666;
};

export default getParameter;
