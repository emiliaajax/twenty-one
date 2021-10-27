/**
 * Module for type DrawPile.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { DiscardPile } from './DiscardPile.js'

export const DrawPile = {
  pile: [],
  /**
   * Shuffles and puts the discard pile in the draw pile. Returns the new draw pile.
   *
   * @returns {object[]} The draw pile.
   */
  discardPileToDrawPile: function () {
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
