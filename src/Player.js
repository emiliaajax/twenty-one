/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Dealer } from './Dealer.js'
import { Participant } from './Participant.js'

/**
 *
 */
export class Player extends Participant {
  /**
   * Creates a Javascript Player instance representing a player.
   *
   * @param {number} playerNumber The number of the player.
   */
  constructor (playerNumber) {
    super()
    this.playerNumber = playerNumber
    this.cards = []
  }

  playerHand () {
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
    const cardsOnHand = this.cards
    // cardsOnHand.push(Dealer.dealOneCard())
    // const sumOfHand = this.checkSumOfHand(cardsOnHand)
    while (sumOfHand < stop || cardsOnHand.length < 2) {
      cardsOnHand.push(Dealer.dealOneCard)
      const sumOfHand = this.checkSumOfHand(cardsOnHand)
    }
  }
}

//   /**
//    * Returns the first two cards as an array.
//    *
//    * @returns {Array} array
//    */
//   get firstTwoCards () {
//     const first = this.firstCard
//     const second = this.secondCard
//     const sumOfFirstTwo = first[1] + second[1]
//     const firstTwoCardsArray = [first[0], second[0], sumOfFirstTwo]
//     return firstTwoCardsArray
//   }

//   /**
//    * Returns an array with player number at index 0, suits and ranks from full hand from index 1 until index length-2, and primitive value of whole hand at last index.
//    *
//    * @param {object[]} playingCards An array with PlayingCard objects.
//    * @returns {Array} An array with player number, suits and ranks of all cards and primitive value of full hand.
//    */
//   playerHand (playingCards) {
//     const fullHand = Dealer.dealRestOfCards(playingCards, this.firstTwoCards)
//     const cards = fullHand.pop()
//     this.fullHand = cards
//     console.log(cards)
//     console.log(this.firstCard)
//     console.log(this.secondCard)
//     return fullHand
//   }

//   /**
//    * Returns a string representing the player hand.
//    *
//    * @returns {string} A string representing the player hand.
//    */
//   toString () {
//     const playerArray = this.fullHand
//     const cardsOfPlayerHand = playerArray.slice(0, playerArray.length - 2)
//     const sumOfPlayerHand = playerArray.slice(-1)
//     return `Player #${this.playerNumber}: ${cardsOfPlayerHand.join(' ')} (${sumOfPlayerHand})`
//   }
// }