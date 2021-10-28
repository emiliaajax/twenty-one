/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Game } from './Game.js'
import { PlayerError } from './PlayerError.js'
import { DrawPileError } from './DrawPileError.js'
import process from 'process'

try {
  const howManyPlayers = Array.from(process.argv)
  let numberOfPlayers = Number(howManyPlayers.pop())
  if (numberOfPlayers <= 0 || (numberOfPlayers > 7 && numberOfPlayers !== 20 && numberOfPlayers !== 50) || (Number.isNaN(numberOfPlayers) && process.argv.length > 2)) {
    throw new PlayerError('Invalid number of players')
  } else if (Number.isNaN(numberOfPlayers)) {
    numberOfPlayers = 3
  }
  const game = new Game(numberOfPlayers)
  game.start()
} catch (e) {
  console.error(e.message)
  process.exitCode = 1
  if (e instanceof PlayerError) {
    process.exitCode = 26
  }
  if (e instanceof DrawPileError) {
    process.exitCode = 27
  }
}
