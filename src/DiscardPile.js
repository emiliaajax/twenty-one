/**
 * Module for type DiscardPile.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

/**
 *
 */
// export class DiscardPile {
//   /**
//    * Creates a Javascript DiscardPile instance representing a discard pile.
//    *
//    */
//   constructor () {
//     this.pile = []
//   }
export const DiscardPile = {
  pile: [],
  /**
   * Throws player and dealer cards on discard pile after a round.
   *
   * @param {object} player The player object.
   * @param {object} dealer The dealer object.
   */
  throwCards (player, dealer) {
    const allCards = player.cards.concat(dealer.cards)
    player.cards = []
    dealer.cards = []
    for (let k = 0; k < allCards.length; k++) {
      this.pile.push(allCards[k])
    }
  }
}
