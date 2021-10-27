
/**
 *
 *
 */
// The following code is written using the code example from the lecture about error handling and validation (course week 7) as template.
export class PlayerError extends Error {
  /**
   * Creates a Javascript PlayerError instance representing an error.
   *
   * @param {string} message The error message that will get printed out.
   */
  constructor (message) {
    super(message)
    this.name = 'PlayerError'
  }
}