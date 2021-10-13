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
  static dealOneCard (playingCards) {
    const hand = []
    let currentCard = 0
    currentCard = playingCards.shift()
    hand.push(currentCard.toString())
    const sumOfHand = currentCard.valueOf()
    hand.push(sumOfHand)
    return hand
  }

  /**
   * Returns an array of all suits and ranks of cards up to a stop value between 14 and 18. Last element represents primitive value of the cards.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @param {object} first An object representing the first drawn card by player.
   * @returns {Array} An array with all cards drawn represented as strings up to index = length - 2. Last element is sum of the cards primitive values.
   */
  static dealRestOfCards (playingCards, first) {
    const cardRankArray = [first.pop()]
    let sumOfHand = cardRankArray[0]
    const cardArray = first
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const stop = Math.floor(Math.random() * (18 - 13) + 13)
    let outcome = ''
    while (sumOfHand < stop) { // || cardArray.length <= 1) {
      const getNewCard = Array.from(this.dealOneCard(playingCards))
      const cardRank = getNewCard.pop()
      cardRankArray.push(cardRank)
      cardArray.push(getNewCard.pop())
      sumOfHand = cardRankArray.reduce(function (a, b) { return a + b })
      const checkForAce = cardRankArray.indexOf(1)
      if (checkForAce !== -1) {
        const altCardRankArray = Array.from(cardRankArray)
        altCardRankArray[checkForAce] = 14
        const altSumOfHand = altCardRankArray.reduce(function (a, b) { return a + b })
        if (altSumOfHand > stop && altSumOfHand <= 21 && altSumOfHand > sumOfHand) {
          sumOfHand = altSumOfHand
        }
      }
      if ((cardArray.length === 5 && sumOfHand < 21) || sumOfHand === 21) {
        outcome = 'WIN'
        break
      } else if (sumOfHand > 21) {
        outcome = 'LOSE'
        break
      }
    }
    cardArray.push(outcome)
    cardArray.push(sumOfHand)
    return cardArray
  }
}
