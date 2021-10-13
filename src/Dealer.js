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
   * Creates a Javascript Player instance representing a player.
   *
   */
  constructor () {
    this.fullHand = []
  }

  /**
   * Returns the hand of the dealer as an array with suits and ranks as all elements except last, and primitive value of full hand as last element.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with suits and ranks of all cards, and primitive value of full hand.
   */
  dealerHand (playingCards) {
    const firstCard = Hand.dealOneCard(playingCards)
    const fullHand = Hand.dealRestOfCards(playingCards, firstCard)
    return fullHand
  }

  /**
   * Returns a string representing the dealer hand.
   *
   * @returns {string} A string representing the player hand.
   */
  toString () {
    const dealerArray = this.fullHand
    const cardsOfDealerHand = dealerArray.slice(0, dealerArray.length - 2)
    const sumOfDealerHand = dealerArray.slice(-1)
    return `Dealer   : ${cardsOfDealerHand.join(' ')} (${sumOfDealerHand})`
  }
}
