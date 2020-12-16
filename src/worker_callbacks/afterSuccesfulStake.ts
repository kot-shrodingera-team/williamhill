// import { log } from '@kot-shrodingera-team/germes-utils';
// import getCoefficientGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getCoefficient';

// const getResultCoefficient = getCoefficientGenerator({
//   coefficientSelector: '.bs-bet-price__selected',
// });

const afterSuccesfulStake = (): void => {
  // log('Обновление итогового коэффициента', 'steelbue');
  // const resultCoefficient = getResultCoefficient();
  // if (resultCoefficient === 0) {
  //   log('Не найден итоговый коэффициент, считаем что он не изменился');
  //   return;
  // }
  // if (resultCoefficient !== worker.StakeInfo.Coef) {
  //   log(
  //     `Коеффициент изменился: ${worker.StakeInfo.Coef} => ${resultCoefficient}`,
  //     'orange'
  //   );
  //   worker.StakeInfo.Coef = resultCoefficient;
  //   return;
  // }
  // log('Коеффициент не изменился', 'lightblue');
};

export default afterSuccesfulStake;
