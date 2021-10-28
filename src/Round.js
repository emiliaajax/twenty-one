
/**
 *
 *
 */
export class Round {
  /**
   * Returns the final result of the game round between one player and a dealer.
   *
   * @param {object} player A player object.
   * @param {object} dealer A dealer object.
   * @returns {string} The final result of the game round between player and dealer.
   */
  static playRound (player, dealer) {
    let finalResult = ''
    const playerResult = player.playerHand()
    if (this.#immediateWin(playerResult)) {
      finalResult = `${player.toString()}\nDealer   : -\nPlayer wins!\n`
    }
    if (this.#isBusted(playerResult)) {
      finalResult = `${player.toString()} YOU HUGE!\nDealer   : -\nDealer wins!\n`
    }
    if (!this.#immediateWin(playerResult) && !this.#isBusted(playerResult)) {
      const dealerResult = dealer.dealerHand()
      if (this.#immediateWin(dealerResult)) {
        finalResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
      }
      if (this.#isBusted(dealerResult)) {
        finalResult = `${player.toString()}\n${dealer.toString()} YOU HUGE!\nPlayer wins!\n`
      }
      if (!this.#immediateWin(dealerResult) && !this.#isBusted(dealerResult)) {
        finalResult = this.#compareHands(player, dealer)
      }
    }
    return finalResult
  }

  /**
   * Returns true if the result is a win, false otherwise.
   *
   * @param {string} result The result of the hand.
   * @returns {boolean} True if the result is a win, false otherwise.
   */
  static #immediateWin (result) {
    return result === 'WIN'
  }

  /**
   * Returns true if the result is lose, false otherwise.
   *
   * @param {string} result The result of the hand.
   * @returns {boolean} True if the result is lose, false otherwise.
   */
  static #isBusted (result) {
    return result === 'LOSE'
  }

  /**
   * Returns the game result after comparing player and dealer hands.
   *
   * @param {object} player The current player object.
   * @param {object} dealer The dealer object.
   * @returns {string} A string with the final result.
   */
  static #compareHands (player, dealer) {
    let finalResult = ''
    if (player.sum > dealer.sum) {
      finalResult = `${player.toString()}\n${dealer.toString()}\nPlayer wins!\n`
    } else {
      finalResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
    }
    return finalResult
  }
}
