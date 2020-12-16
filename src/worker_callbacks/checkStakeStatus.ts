import { log } from '@kot-shrodingera-team/germes-utils';
import { updateBalance } from '../stake_info/getBalance';
import { setMaximumStake } from '../stake_info/getMaximumStake';

const checkStakeStatus = (): boolean => {
  const returnToBetslipButton = document.querySelector(
    '.bs-bet-processing__betslip .css-bgn9uo'
  ) as HTMLElement;
  const successIcon = document.querySelector('#SUCCESS');
  if (successIcon) {
    log('Cтавка принята (иконка)', 'green');
    updateBalance();
    return true;
  }
  const priceChangeIcon = document.querySelector('#PRICE_CHANGE');
  if (priceChangeIcon) {
    log('Ставка не принята (изменение коэффициента)', 'tomato');
    if (!returnToBetslipButton) {
      log('Не найдена кнопка возврата в купон', 'crimson');
    } else {
      returnToBetslipButton.click();
    }
    return false;
  }
  const suspendedIcon = document.querySelector('#SUSPENDED');
  if (suspendedIcon) {
    log('Ставка не принята (ставка недоступна)', 'tomato');
    if (!returnToBetslipButton) {
      log('Не найдена кнопка возврата в купон', 'crimson');
    } else {
      returnToBetslipButton.click();
    }
    return false;
  }
  const maxStakeIcon = document.querySelector('#MAX_STAKE_ONE_BET');
  if (maxStakeIcon) {
    const betProcessingFooterElement = document.querySelector(
      '.bs-bet-processing__footer'
    );
    if (!betProcessingFooterElement) {
      log(
        'Ставка не принята (превышена максимальная ставка, но не найдено сообщение)',
        'tomato'
      );
    } else {
      const betProcessingFooter = betProcessingFooterElement.textContent.trim();
      const maxStakeMatch = betProcessingFooter.match(/(\d+(?:\.\d+)?)/);
      if (!maxStakeMatch) {
        log(
          'Ставка не принята (превышена максимальная ставка, но в сообщении не найдена максимальная ставка)',
          'tomato'
        );
        log(`Текст сообщения: "${betProcessingFooter}"`, 'tomato');
      } else {
        const newMaximumStake = Number(maxStakeMatch[1]);
        log('Ставка не принята (превышена максимальная ставка)', 'tomato');
        log(`Новая максимальная ставка: ${newMaximumStake}`, 'orange');
        setMaximumStake(newMaximumStake);
      }
    }
    if (!returnToBetslipButton) {
      log('Не найдена кнопка возврата в купон', 'crimson');
    } else {
      returnToBetslipButton.click();
    }
    return false;
  }
  const receiptHeaderElement = document.querySelector(
    '.bs-receipt-header__title'
  );
  if (receiptHeaderElement) {
    const receiptHeader = receiptHeaderElement.textContent.trim();
    if (/Bet Placed/i.test(receiptHeader)) {
      log('Cтавка принята (Bet Placed)', 'green');
      return true;
    }
    log(
      `Ставка не принята (неизвестный результат ставки: "${receiptHeader}")`,
      'crimson'
    );
    return false;
  }
  const betProcessingFooterElement = document.querySelector(
    '.bs-bet-processing__footer'
  );
  if (betProcessingFooterElement) {
    const betProcessingFooter = betProcessingFooterElement.textContent.trim();
    log(
      `Ставка не принята (ошибка ставки: "${betProcessingFooter}")`,
      'crimson'
    );
    if (!returnToBetslipButton) {
      log('Не найдена кнопка возврата в купон', 'crimson');
    } else {
      returnToBetslipButton.click();
    }
    return false;
  }
  log(`Ставка не принята (результат не найден)`, 'crimson');
  return false;
};

export default checkStakeStatus;
