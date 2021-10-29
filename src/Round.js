/**
 * Module for the type Round.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

/**
 * Represents one game round.
 *
 * @class
 */
export class Round {
  /**
   * Returns the final result of the game round between a player and a dealer.
   *
   * @param {object} player The current player object.
   * @param {object} dealer The dealer object.
   * @param {object[]} playingCards The playingCards object.
   * @returns {string} The final result of the game round between player and dealer.
   */
  static play (player, dealer, playingCards) {
    let finalResult = player.playerHand(playingCards)
    if (!finalResult) {
      finalResult = dealer.dealerHand(playingCards)
      if (!finalResult) {
        finalResult = this.#compareHands(player, dealer)
      } else {
        finalResult = player.toString() + finalResult
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
    let gameResult = ''
    if (player.sum > dealer.sum) {
      gameResult = `${player.toString()}\n${dealer.toString()}\nPlayer wins!\n`
    } else {
      gameResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
    }
    return gameResult
  }
}
