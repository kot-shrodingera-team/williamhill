interface WHLeg {
  handicapValue: number;
  legSort: string;
  priceDenominator: number;
  priceNumerator: number;
  priceType: string;
  selectionId: string;
}

interface WH {
  messageBus: {
    publish(action: 'betslip.leg.add', leg: WHLeg): void;
  };
}

declare global {
  const WH: WH;
}

export default {};
