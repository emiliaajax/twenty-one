/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'

try {
  // Create 52 playing cards and...
  let playingCards = Deck.create()

  // ...shuffle them.
  Deck.shuffle(playingCards)

  const numberOfPlayers = Number(process.argv.pop())
  const dealer = new Dealer()
  for (let i = 1; i <= numberOfPlayers; i++) {
    if (playingCards.length <= 1) {
      playingCards = Deck.create()
      playingCards = Deck.shuffle(playingCards)
    }
    const player = new Player(i)
    const firstCard = player.playerFirstCard(playingCards)
    console.log(player.toString(playingCards, firstCard))
    console.log(dealer.toString(playingCards))
  }
} catch (e) {
  console.error(e.message)
}
