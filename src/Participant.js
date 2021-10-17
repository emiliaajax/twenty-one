/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { DiscardPile } from './DiscardPile.js'
import { DrawPile } from './DrawPile.js'

/**
 *
 */
export class Participant {
  /**
   * Returns one card from the draw pile.
   *
   * @returns {object} One PlayingCard object from the draw pile.
   */
  demandACard () {
    if (DrawPile.pile.length <= 1) {
      if (DiscardPile.pile.length === 0) {
        process.exitCode = 27
        throw new Error('Not enough cards in the draw pile')
      }
      DrawPile.pile = DrawPile.discardPileToDrawPile()
      DiscardPile.pile = []
    }
    const card = (DrawPile.pile).shift()
    return card
  }

  /**
   * Returns the sum of all the cards on hand.
   *
   * @param {object[]} cards An array of PlayingCard objects.
   * @returns {number} The sum of all the cards on hand.
   */
  checkSumOfHand (cards) {
    let sumOfHand = 0
    // Här skulle jag kanske kunna köra en reduce
    for (let i = 0; i < cards.length; i++) {
      const currentCard = cards[i]
      const currentCardValue = currentCard.valueOf()
      sumOfHand += currentCardValue
    }
    return sumOfHand
  }

  /**
   * Returns the outcome of the current hand as a string.
   *
   * @param {object[]} cards An array of PlayingCard objects.
   * @param {number} sum The primitive value of the card.
   * @returns {string} The outcome as a string.
   */
  evaluate (cards, sum) {
    let outcome = ''
    if ((cards.length === 5 && sum < 21) || sum === 21) {
      outcome = 'WIN'
    } else if (sum > 21) {
      outcome = 'LOSE'
    }
    return outcome
  }

  /**
   * Returns the sum with the optimal value of ace for the current hand.
   *
   * @param {object[]} cards An array of PlayingCard objects.
   * @param {number} stop The stop condition for the participant.
   * @returns {number} The sum of the hand with the optimal value of ace.
   */
  sumWithOptimalAce (cards, stop) {
    const cardsCopy = Array.from(cards)
    let sumOfHand = this.checkSumOfHand(cardsCopy)
    for (let i = 0; i < cards.length; i++) {
      if (cardsCopy[i].rank === 1) {
        const altSumOfHand = sumOfHand + 13
        if (altSumOfHand > sumOfHand && altSumOfHand >= stop && altSumOfHand <= 21) {
          sumOfHand = altSumOfHand
          cards = cardsCopy
        }
      }
    }
    return sumOfHand
  }

  /**
   * Returns a string array representation of the current hand.
   *
   * @param {object[]} cards An array of PlayingCard objects.
   * @returns {string[]} A string array represenation of current hand.
   */
  cardsAsStrings (cards) {
    const stringArray = []
    for (let i = 0; i < cards.length; i++) {
      const currentCard = cards[i]
      const currentCardString = currentCard.toString()
      stringArray.push(currentCardString)
    }
    return stringArray
  }
}
