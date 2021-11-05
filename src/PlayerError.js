/**
 * Module for type PlayerError.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

// The following code is written using the code example from the lecture about error handling and validation (course week 7) as template.

/**
 * Represents a player error.
 *
 * @class
 * @augments {Error}
 */
export class PlayerError extends Error {
  /**
   * The name of error.
   *
   * @type {string}
   * @public
   */
  name

  /**
   * Creates a Javascript PlayerError instance representing a player error.
   *
   * @param {string} message The error message that will get printed out.
   */
  constructor (message) {
    super(message)
    this.name = 'PlayerError'
  }
}
