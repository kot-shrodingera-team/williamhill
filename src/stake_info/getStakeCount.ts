import getStakeCountGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getStakeCount';

const getStakeCount = getStakeCountGenerator({
  // stakeElementSelector: '.selected-bet:not([class*="multiple-bet"])',
  // bs-betslip__view-layer
  // stakeElementSelector: '.bs-selection:not(.bs-selection--info)',
  stakeElementSelector:
    '.bs-betslip__view-layer:not([style*="display: none"]) .bs-selection:not(.bs-selection--info)',
});

export default getStakeCount;
