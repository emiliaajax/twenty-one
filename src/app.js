/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { start } from './game.js'
import process from 'process'

try {
  const howManyPlayers = Array.from(process.argv)
  let numberOfPlayers = Number(howManyPlayers.pop())
  if (numberOfPlayers <= 0 || (numberOfPlayers > 7 && numberOfPlayers < 20) || numberOfPlayers > 50 || (Number.isNaN(numberOfPlayers) && process.argv.length > 2)) {
    process.exitCode = 26
    throw new Error('Invalid number of players')
  } else if (Number.isNaN(numberOfPlayers)) {
    numberOfPlayers = 3
  }
  start(numberOfPlayers)
} catch (e) {
  console.error(e.message)
  if (process.exitCode !== 26 && process.exitCode !== 27) {
    process.exitCode = 1
  }
}
