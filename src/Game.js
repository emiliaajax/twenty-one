/**
 * Module for the type Game.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { PlayingCards } from './PlayingCards.js'

/**
 * Represents a game.
 *
 * @class
 */
export class Game {
  /**
   * The number of players.
   *
   * @type {number}
   * @private
   */
  #numberOfPlayers
  /**
   * An instance of type Dealer.
   *
   * @type {Dealer}
   * @private
   */
  #dealer
  /**
   * An instance of type PlayingCards.
   *
   * @type {PlayingCards}
   * @private
   */
  #playingCards
  /**
   * An empty array to hold all players.
   *
   * @type {Array}
   * @private
   */
  #players
  /**
   * An instance of type Player.
   *
   * @type {Player}
   */
  #currentPlayer
  /**
   * Creates a Javascript Game instance representing a game.
   *
   * @param {number} numberOfPlayers The number of players.
   */
  constructor (numberOfPlayers) {
    this.#numberOfPlayers = numberOfPlayers
    this.#dealer = new Dealer()
    this.#playingCards = new PlayingCards()
    this.#players = []
  }

  /**
   * Starts game and prints final game result in console.
   *
   * @public
   */
  start () {
    this.#createPlayersAndHandThemACard()
    for (let i = 0; i < this.#players.length; i++) {
      this.#currentPlayer = this.#players[i]
      const gameResult = this.#playRound()
      console.log(gameResult)
      this.#playingCards.throwCardsToDiscardPile(this.#currentPlayer, this.#dealer)
    }
  }

  /**
   * Returns an array with all players where all has been given one card each.
   *
   * @private
   */
  #createPlayersAndHandThemACard () {
    for (let j = 1; j <= this.#numberOfPlayers; j++) {
      this.#currentPlayer = new Player(j)
      this.#players.push(this.#currentPlayer)
      this.#currentPlayer.cards.push(this.#playingCards.drawACard())
    }
  }

  /**
   * Returns the final result of the game round between a player and a dealer.
   *
   * @returns {string} The final result of the game round between player and dealer.
   * @private
   */
  #playRound () {
    let finalResult = this.#currentPlayer.playerHand(this.#playingCards)
    if (!finalResult) {
      finalResult = this.#dealer.dealerHand(this.#playingCards)
      if (!finalResult) {
        finalResult = this.#compareHands(this.#currentPlayer)
      } else {
        finalResult = this.#currentPlayer.toString() + finalResult
      }
    }
    return finalResult
  }

  /**
   * Returns the game result after comparing player and dealer hands.
   *
   * @returns {string} A string with the final result.
   * @private
   */
  #compareHands () {
    let gameResult = ''
    if (this.#currentPlayer.sum > this.#dealer.sum) {
      gameResult = `${this.#currentPlayer.toString()}\n${this.#dealer.toString()}\nPlayer wins!\n`
    } else {
      gameResult = `${this.#currentPlayer.toString()}\n${this.#dealer.toString()}\nDealer wins!\n`
    }
    return gameResult
  }
}
