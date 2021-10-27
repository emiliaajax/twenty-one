
/**
 *
 *
 */
// The following code is written using the code example from the lecture about error handling and validation (course week 7) as template.
export class DrawPileError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DrawPileError'
  }
}
