
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
    let gameResult = player.checkForImmediateWinOrLoss()
    if (!gameResult) {
      dealer.dealerHand()
      gameResult = dealer.checkForImmediateWinOrLoss(player)
      if (!gameResult) {
        gameResult = this.#compareHands(player, dealer)
      }
    }
    return gameResult
  }

  /**
   * Returns the game result after comparing player and dealer hands.
   *
   * @param {object} player The current player object.
   * @param {object} dealer The dealer object.
   * @returns {string} A string with the final result.
   */
  static #compareHands (player, dealer) {
    let gameResult = ''
    if (player.sum > dealer.sum) {
      gameResult = `${player.toString()}\n${dealer.toString()}\nPlayer wins!\n`
    } else {
      gameResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
    }
    return gameResult
  }
}
