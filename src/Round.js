
/**
 *
 *
 */
export class Round {
  /**
   * Returns the final result of the game round between a player and a dealer.
   *
   * @param {object} player A player object.
   * @param {object} dealer A dealer object.
   * @returns {string} The final result of the game round between player and dealer.
   */
  static play (player, dealer) {
    player.playerHand()
    let finalResult = player.checkForImmediateWinOrLoss()
    if (!finalResult) {
      dealer.dealerHand()
      finalResult = dealer.checkForImmediateWinOrLoss(player)
      if (!finalResult) {
        finalResult = this.#compareHands(player, dealer)
      }
    }
    return finalResult
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
