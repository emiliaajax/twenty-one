/**
 * Module for object drawPile.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { discardPile } from './DiscardPile.js'
import { DrawPileError } from './DrawPileError.js'

export const drawPile = {
  pile: Deck.shuffle(Deck.create()),
  /**
   * Check if drawPile has more than one card, if not put the discard pile and draw pile together and shuffle. If the discard pile is empty, throw error.
   *
   * @throws {DrawPileError} Not enough cards in the draw pile.
   */
  checkPile () {
    if (this.pile.length <= 1) {
      if (discardPile.pile.length === 0) {
        throw new DrawPileError('Not enough cards in the draw pile')
      }
      this.pile = this.discardPileToDrawPile()
      discardPile.pile = []
    }
  },
  /**
   * Shuffles and puts the discard pile in the draw pile. Returns the new draw pile.
   *
   * @returns {object[]} The draw pile.
   */
  discardPileToDrawPile () {
    let updatedDrawPile = discardPile.pile.concat(drawPile.pile)
    updatedDrawPile = Deck.shuffle(updatedDrawPile)
    return updatedDrawPile
  }
}
