/**
 * Module for type Pile.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { DrawPileError } from './DrawPileError.js'

/**
 * Represents a pile.
 *
 * @class
 * @augments {Deck}
 */
export class PlayingCards {
  /**
   * Creates a Javascript Pile instance representing a pile.
   *
   */
  constructor () {
    this.drawPile = Deck.shuffle(Deck.create())
    this.discardPile = []
  }

  /**
   * Checks if drawPile has more than one card, if not the discard pile and draw pile is put together and shuffled. If the discard pile is empty, error throws.
   *
   * @throws {DrawPileError} Not enough cards in the draw pile.
   */
  checkDrawPile () {
    if (this.drawPile.length <= 1) {
      if (this.discardPile.length === 0) {
        throw new DrawPileError('Not enough cards in the draw pile')
      }
      this.drawPile = this.discardPileToDrawPile()
      this.discardPile = []
    }
  }

  /**
   * Returns one card from the draw pile.
   *
   * @returns {object} One PlayingCard object from the draw pile.
   */
  drawACard () {
    this.checkDrawPile()
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
   * Throws player and dealer cards on discard pile after a round.
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
