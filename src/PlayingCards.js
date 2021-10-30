/**
 * Module for type PlayingCards.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { DrawPileError } from './DrawPileError.js'

/**
 * Represents playing cards.
 *
 * @class
 */
export class PlayingCards {
  /**
   * A shuffled array with PlayingCard objects.
   *
   * @type {object[]}
   * @public
   */
  drawPile
  /**
   * An empty array to hold the thrown PlayingCard objects.
   *
   * @type {Array}
   * @public
   */
  discardPile

  /**
   * Creates a Javascript PlayingCards instance representing playing cards.
   *
   */
  constructor () {
    this.drawPile = Deck.shuffle(Deck.create())
    this.discardPile = []
  }

  /**
   * Returns one card from the draw pile. If the draw pile has only one card left and the discard pile is empty, error is thrown.
   *
   * @throws {DrawPileError} Not enough cards in the draw pile.
   * @returns {object} One PlayingCard object from the draw pile.
   */
  drawACard () {
    if (this.drawPile.length <= 1) {
      if (this.discardPile.length === 0) {
        throw new DrawPileError('Not enough cards in the draw pile')
      }
      this.drawPile = this.discardPileToDrawPile()
      this.discardPile = []
    }
    return this.drawPile.shift()
  }

  /**
   * Shuffles and puts the discard pile in the draw pile. Returns the new draw pile.
   *
   * @returns {object[]} The draw pile.
   */
  discardPileToDrawPile () {
    let updatedDrawPile = this.discardPile.concat(this.drawPile)
    updatedDrawPile = Deck.shuffle(updatedDrawPile)
    return updatedDrawPile
  }

  /**
   * Throws player and dealer cards on discard pile after a game round.
   *
   * @param {object} player The player object.
   * @param {object} dealer The dealer object.
   */
  throwCardsToDiscardPile (player, dealer) {
    const allCards = player.cards.concat(dealer.cards)
    player.cards = []
    dealer.cards = []
    for (let k = 0; k < allCards.length; k++) {
      this.discardPile.push(allCards[k])
    }
  }
}
