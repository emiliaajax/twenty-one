/**
 * Module for the type Game.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { Pile } from './Pile.js'
import { Round } from './Round.js'

/**
 * Represents a game.
 *
 * @class
 */
export class Game {
  /**
   * Creates a Javascript Game instance representing a game.
   *
   * @param {number} numberOfPlayers The number of players.
   */
  constructor (numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
    this.dealer = new Dealer()
    this.pile = new Pile()
    this.players = []
  }

  /**
   * Starts game and prints final game result in console.
   *
   */
  start () {
    this.#createPlayersAndHandThemACard()
    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i]
      const gameResult = Round.play(player, this.dealer, this.pile)
      console.log(gameResult)
      this.pile.throwCardsToDiscardPile(player, this.dealer)
    }
  }

  /**
   * Returns an array with all players where all has been given one card each.
   *
   */
  #createPlayersAndHandThemACard () {
    for (let j = 1; j <= this.numberOfPlayers; j++) {
      const player = new Player(j)
      this.players.push(player)
      player.cards.push(this.pile.drawACard())
    }
  }
}
