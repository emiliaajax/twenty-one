/**
 * Module for game loop.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { DrawPile } from './DrawPile.js'
import { DiscardPile } from './DiscardPile.js'

/**
 *
 */
export class Game {
  /**
   * Creates a Javascript DiscardPile instance representing a discard pile.
   *
   * @param {number} numberOfPlayers The number of players.
   */
  constructor (numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
  }

  /**
   * Starts the game and prints game result in console.
   *
   */
  start () {
    DrawPile.pile = Deck.create()
    Deck.shuffle(DrawPile.pile)
    const dealer = new Dealer()
    const players = this.#createAllPlayersAndHandThemACard()
    this.#playGameAndPrintResult(players, dealer)
  }

  /**
   * Creates an array with all the players and gives them one card each.
   *
   * @returns {object[]} Returns an array with all players.
   */
  #createAllPlayersAndHandThemACard () {
    const playerArray = []
    for (let j = 1; j <= this.numberOfPlayers; j++) {
      const player = new Player(j)
      playerArray.push(player)
      player.cards.push(player.demandACard())
    }
    return playerArray
  }

  /**
   * Dealer plays towards all players one at a time, and the result is printed in console.
   *
   * @param {object[]} players An array with all player objects.
   * @param {object[]} dealer A dealer object.
   */
  #playGameAndPrintResult (players, dealer) {
    for (let i = 0; i < players.length; i++) {
      let finalResult = ''
      const player = players[i]
      const playerResult = player.playerHand()
      if (this.#immediateWin(playerResult)) {
        finalResult = `${player.toString()}\nDealer   : -\nPlayer wins!\n`
      }
      if (this.#isBusted(playerResult)) {
        finalResult = `${player.toString()} YOU HUGE!\nDealer   : -\nDealer wins!\n`
      }
      if (!this.#immediateWin(playerResult) && !this.#isBusted(playerResult)) {
        const dealerResult = dealer.dealerHand()
        if (this.#immediateWin(dealerResult)) {
          finalResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
        }
        if (this.#isBusted(dealerResult)) {
          finalResult = `${player.toString()}\n${dealer.toString()} YOU HUGE!\nPlayer wins!\n`
        }
        if (!this.#immediateWin(dealerResult) && !this.#isBusted(dealerResult)) {
          finalResult = this.#compareHands(player, dealer)
        }
      }
      console.log(finalResult)
      DiscardPile.throwCards(player, dealer)
    }
  }

  /**
   * Returns true if the result is a win, false otherwise.
   *
   * @param {string} result The result of the hand.
   * @returns {boolean} True if the result is a win, false otherwise.
   */
  #immediateWin (result) {
    return result === 'WIN'
  }

  /**
   * Returns true if the result is lose, false otherwise.
   *
   * @param {string} result The result of the hand.
   * @returns {boolean} True if the result is lose, false otherwise.
   */
  #isBusted (result) {
    return result === 'LOSE'
  }

  /**
   * Returns the final result after comparing player and dealer hands.
   *
   * @param {object} player The current player object.
   * @param {object} dealer The dealer object.
   * @returns {string} A string with the final result.
   */
  #compareHands (player, dealer) {
    let finalResult = ''
    if (player.sum > dealer.sum) {
      finalResult = `${player.toString()}\n${dealer.toString()}\nPlayer wins!\n`
    } else {
      finalResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
    }
    return finalResult
  }
}
