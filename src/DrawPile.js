/**
 * Module for type DrawPile.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { DiscardPile } from './DiscardPile.js'
import { DrawPileError } from './DrawPileError.js'

export const DrawPile = {
  pile: [],
  /**
   * Check if drawPile has more than one card, if not put the discard pile and draw pile together and shuffle. If the discard pile is empty, throw error.
   *
   * @throws {DrawPileError} Not enough cards in the draw pile.
   */
  checkPile () {
    if (this.pile.length <= 1) {
      if (DiscardPile.pile.length === 0) {
        throw new DrawPileError('Not enough cards in the draw pile')
      }
      this.pile = this.discardPileToDrawPile()
      DiscardPile.pile = []
    }
  },
  /**
   * Shuffles and puts the discard pile in the draw pile. Returns the new draw pile.
   *
   * @returns {object[]} The draw pile.
   */
  discardPileToDrawPile () {
    let drawPile = DiscardPile.pile.concat(DrawPile.pile)
    drawPile = Deck.shuffle(drawPile)
    return drawPile
  }
}

// /**
//  *
//  */
// export class DrawPile extends Deck {
//   /**
//    * Creates a Javascript DiscardPile instance representing a discard pile.
//    */
//   constructor () {
//     super()
//     this.pile = []
//   }

//   /**
//    * Shuffles and puts the discard pile in the draw pile. Returns the new draw pile.
//    *
//    * @returns {object[]} The draw pile.
//    */
//   static discardPileToDrawPile () {
//     let drawPile = DiscardPile.pile.concat(DrawPile.pile)
//     drawPile = this.shuffle(drawPile)
//     return drawPile
//   }
// }
