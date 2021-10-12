/**
 * Module for type Hand.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

/**
 *
 */
export class Hand {
  /**
   * Returns one card as an array with the suit and rank as the first element and the primitive value of the card.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with suit and rank as first element and primitive value as second.
   */
  static firstCard (playingCards) {
    const hand = []
    let currentCard = 0
    currentCard = playingCards.shift()
    hand.push(currentCard.toString())
    const sumOfHand = currentCard.valueOf()
    hand.push(sumOfHand)
    return hand
  // }
  // return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }

  /**
   * Returns an array of all suits and ranks of cards up to a stop value between 14 and 18. Last element represents primitive value of the cards.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @param {object} first An object representing the first drawn card by player.
   * @returns {Array} An array with all cards drawn represented as strings up to index = length - 2. Last element is sum of the cards primitive values.
   */
  static restOfCards (playingCards, first) {
    let sumOfHand = first.pop()
    const cardArray = [first.pop()]
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const stop = Math.floor(Math.random() * (19 - 14) + 14)
    while (sumOfHand < stop) {
      const getNewCard = Array.from(this.firstCard(playingCards))
      sumOfHand += getNewCard.pop()
      cardArray.push(getNewCard.pop())
    }
    cardArray.push(sumOfHand)
    return cardArray
  }
}
