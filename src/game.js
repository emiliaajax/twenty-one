/**
 * Module for game loop.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { DiscardPile } from './DiscardPile.js'
import { Round } from './Round.js'

/**
 *
 */
export class Game {
  /**
   * Creates a Javascript Game instance representing a game.
   *
   * @param {number} numberOfPlayers The number of players.
   */
  constructor (numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
  }

  /**
   * Starts game and prints result in console.
   *
   */
  start () {
    const dealer = new Dealer()
    const players = this.#createPlayersAndHandThemACard()
    this.#playGameAndPrintResult(players, dealer)
  }

  /**
   * Returns an array with all players and all of them has been given one card each.
   *
   * @returns {object[]} Returns an array with all players.
   */
  #createPlayersAndHandThemACard () {
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
   * @param {object[]} playersArray An array with all player objects.
   * @param {object[]} dealer A dealer object.
   */
  #playGameAndPrintResult (playersArray, dealer) {
    for (let i = 0; i < playersArray.length; i++) {
      const player = playersArray[i]
      const gameResult = Round.playRound(player, dealer)
      console.log(gameResult)
      DiscardPile.throwCards(player, dealer)
    }
  }
}
