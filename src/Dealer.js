
import { Hand } from './Hand.js'

/**
 *
 */
export class Dealer {
  /**
   * Returns the hand of the dealer as an array with suits and ranks as all elements except last, and primitive value of full hand as last element.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with suits and ranks of all cards, and primitive value of full hand.
   */
  dealerHand (playingCards) {
    const firstCard = Hand.firstCard(playingCards)
    const fullHand = Hand.restOfCards(playingCards, firstCard)
    return fullHand
  }
}
