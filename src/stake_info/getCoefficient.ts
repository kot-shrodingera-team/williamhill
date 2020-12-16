import getCoefficientGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getCoefficient';

const getCoefficient = getCoefficientGenerator({
  // coefficientSelector: '.betslip-selection__price',
  coefficientSelector: '.bs-bet-price__selected',
});

export default getCoefficient;
