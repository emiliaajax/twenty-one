/**
 * Module for type Dealer.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

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

  /**
   * Returns a string representing the dealer hand.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {string} A string representing the player hand.
   */
  toString (playingCards) {
    const dealerArray = this.dealerHand(playingCards)
    const cardsOfDealerHand = dealerArray.slice(0, dealerArray.length - 1)
    const sumOfDealerHand = dealerArray.slice(-1)
    return `Dealer   : ${cardsOfDealerHand.join(' ')} (${sumOfDealerHand})\n`
  }
}
