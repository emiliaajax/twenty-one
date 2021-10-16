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
  constructor () {
    super()
    this.pile = []
  }

  discardPileToDrawPile () {
    const drawPile = DiscardPile.pile
    this.pile = this.shuffle(drawPile)
  }
}
