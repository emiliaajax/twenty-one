/**
 * Module for type Dealer.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { DrawPile } from './DrawPile.js'
/**
 *
 */
export class Dealer {
  /**
   * Creates a Javascript Player instance representing a player.
   *
   */
  constructor () {
    this.firstCard = []
    this.restOfCards = []
    this.fullHand = []
  }

  static dealOneCard () {
    const card = (DrawPile.pile).shift()
    return card
  }

  // /**
  //  * Returns the hand of the dealer as an array with suits and ranks as all elements except last, and primitive value of full hand as last element.
  //  *
  //  * @param {object[]} playingCards An array with PlayingCard objects.
  //  * @returns {Array} An array with suits and ranks of all cards, and primitive value of full hand.
  //  */
  // static dealerHand (playingCards) {
  //   const firstCard = this.dealOneCard(playingCards)
  //   this.firstCard = firstCard.pop()
  //   const fullHand = this.dealRestOfCards(playingCards, firstCard)
  //   const cards = fullHand.pop()
  //   this.restOfCards = cards
  //   return fullHand
  // }

  // /**
  //  * Returns one card as an array with the suit and rank as the first element and the primitive value of the card.
  //  *
  //  * @param {object[]} playingCards An array with PlayingCard objects.
  //  * @returns {Array} An array with suit and rank as first element and primitive value as second.
  //  */
  // // static dealOneCard (playingCards) {
  // //   const hand = []
  // //   const currentCard = playingCards.shift()
  // //   hand.push(currentCard.toString())
  // //   const sumOfHand = currentCard.valueOf()
  // //   hand.push(sumOfHand, currentCard)
  // //   return hand
  // // }

  // /**
  //  * Returns an array of all suits and ranks of cards up to a stop value between 14 and 18. Last element represents primitive value of the cards.
  //  *
  //  * @param {object[]} playingCards An array with PlayingCard objects.
  //  * @param {object} first An object representing the first drawn card by player.
  //  * @returns {Array} An array with all cards drawn represented as strings up to index = length - 2. Last element is sum of the cards primitive values.
  //  */
  // static dealRestOfCards (playingCards, first) {
  //   const cardRankArray = [first.pop()]
  //   let sumOfHand = cardRankArray[0]
  //   const cardArray = first
  //   let outcome = ''
  //   const cards = []
  //   if ((cardArray.length === 5 && sumOfHand < 21) || sumOfHand === 21) {
  //     outcome = 'WIN'
  //   } else if (sumOfHand > 21) {
  //     outcome = 'LOSE'
  //   }
  //   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //   const stop = Math.floor(Math.random() * (19 - 13) + 13)
  //   while (sumOfHand < stop) {
  //     const getNewCard = Array.from(this.dealOneCard(playingCards))
  //     cards.push(getNewCard.pop())
  //     cardRankArray.push(getNewCard.pop())
  //     cardArray.push(getNewCard.pop())
  //     sumOfHand = cardRankArray.reduce(function (a, b) { return a + b })
  //     const checkForAce = cardRankArray.indexOf(1)
  //     if (checkForAce !== -1) {
  //       const altCardRankArray = Array.from(cardRankArray)
  //       altCardRankArray[checkForAce] = 14
  //       const altSumOfHand = altCardRankArray.reduce(function (a, b) { return a + b })
  //       if (altSumOfHand > stop && altSumOfHand <= 21 && altSumOfHand > sumOfHand) {
  //         sumOfHand = altSumOfHand
  //       }
  //     }
  //     if ((cardArray.length === 5 && sumOfHand < 21) || sumOfHand === 21) {
  //       outcome = 'WIN'
  //       break
  //     } else if (sumOfHand > 21) {
  //       outcome = 'LOSE'
  //       break
  //     }
  //   }
  //   cardArray.push(outcome, sumOfHand, cards)
  //   return cardArray
  // }

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
