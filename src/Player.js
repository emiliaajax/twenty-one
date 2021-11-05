/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

/**
 * Represents a player.
 *
 * @class
 */
export class Player {
  /**
   * The number of the player.
   *
   * @type {number}
   * @private
   */
  #playerNumber
  /**
   * An empty array to hold the drawn cards.
   *
   * @type {Array}
   * @public
   */
  cards
  /**
   * An empty array to hold the string representations of the cards.
   *
   * @type {Array}
   * @public
   */
  cardRepresentation
  /**
   * The total sum of the hand.
   *
   * @type {number}
   * @public
   */
  sum
  /**
   * The stop limit.
   *
   * @type {number}
   * @public
   */
  stop

  /**
   * Creates a Javascript Player instance representing a player.
   *
   * @param {number} playerNumber The number of the player.
   */
  constructor (playerNumber) {
    this.#playerNumber = playerNumber
    this.cards = []
    this.sum = 0
    this.cardRepresentation = []
    this.stop = Math.floor(Math.random() * (19 - 13) + 13)
  }

  /**
   * Returns the hand as a string representation if player won or lost immediately, otherwise returns undefined.
   *
   * @param {object} playingCards A playingCard object.
   * @returns {string | undefined} The hand as a string representation if player won or lost immediately, otherwise undefined.
   */
  hand (playingCards) {
    let gameResult
    const result = this.drawCardsUntilHappy(playingCards)
    if (result === 'WIN') {
      gameResult = `${this.toString()}\nDealer   : -\nPlayer wins!\n`
    }
    if (result === 'LOSE') {
      gameResult = `${this.toString()} YOU HUGE!\nDealer   : -\nDealer wins!\n`
    }
    return gameResult
  }

  /**
   * Returns 'WIN' or 'LOSE' for immediate win or loss, otherwise an empty string.
   *
   * @param {*} playingCards A playingCards object.
   * @returns {string} A string with the result.
   */
  drawCardsUntilHappy (playingCards) {
    while (this.sum < this.stop && this.cards.length < 5) {
      this.cards.push(playingCards.drawACard())
      this.checkSumOfHand()
      this.sumWithOptimalAce()
    }
    this.cardsAsStrings()
    return this.evaluate()
  }

  /**
   * Calculates the sum of all cards on hand.
   *
   */
  checkSumOfHand () {
    let newSum = 0
    for (let i = 0; i < this.cards.length; i++) {
      const currentCardValue = this.cards[i].valueOf()
      newSum += currentCardValue
    }
    this.sum = newSum
  }

  /**
   * Returns the outcome of the current hand as a string.
   *
   * @returns {string} The outcome as a string.
   */
  evaluate () {
    let outcome = ''
    if ((this.cards.length === 5 && this.sum < 21) || this.sum === 21) {
      outcome = 'WIN'
    } else if (this.sum > 21) {
      outcome = 'LOSE'
    }
    return outcome
  }

  /**
   * Chooses the optimal value of ace for the current hand.
   *
   */
  sumWithOptimalAce () {
    const cardsCopy = Array.from(this.cards)
    for (let i = 0; i < this.cards.length; i++) {
      if (cardsCopy[i].rank === 1) {
        const altSumOfHand = this.sum + 13
        if (altSumOfHand > this.sum && altSumOfHand >= this.stop && altSumOfHand <= 21) {
          this.sum = altSumOfHand
        }
      }
    }
  }

  /**
   * Creates a string array representation of the current hand.
   *
   */
  cardsAsStrings () {
    for (let i = 0; i < this.cards.length; i++) {
      const currentCardString = this.cards[i].toString()
      this.cardRepresentation.push(currentCardString)
    }
  }

  /**
   * Returns a string representing the player hand.
   *
   * @returns {string} A string representing the player hand.
   */
  toString () {
    return `Player #${this.#playerNumber}: ${this.cardRepresentation.join(' ')} (${this.sum})`
  }
}
