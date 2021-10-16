/**
 * Module for type DrawPile.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { DiscardPile } from './DiscardPile.js'

/**
 *
 */
export class DrawPile extends Deck {
  /**
   * Creates a Javascript DiscardPile instance representing a discard pile.
   */
  constructor () {
    super()
    this.pile = []
  }

  /**
   * Shuffles and puts the discard pile in the draw pile. Returns the new draw pile.
   *
   * @returns {object[]} The draw pile.
   */
  static discardPileToDrawPile () {
    let drawPile = Array.from(DiscardPile.pile)
    drawPile = this.shuffle(drawPile)
    return drawPile
  }
}
