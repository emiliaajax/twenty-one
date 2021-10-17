/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { start } from './game.js'

try {
  const numberOfPlayers = Number(process.argv.pop())
  start(numberOfPlayers)
} catch (e) {
  console.error(e.message)
}
