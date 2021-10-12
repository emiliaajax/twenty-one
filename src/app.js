/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.1.0
 */

// TODO: Replace the code below with your own game logic.

import { Deck } from './Deck.js'
import { Player } from './Player.js'
import { Hand } from './Hand.js'

try {
  // Create 52 playing cards and...
  let playingCards = Deck.create()

  // ...shuffle them.
  Deck.shuffle(playingCards)

  const numberOfPlayers = Number(process.argv.pop())
  for (let i = 1; i <= numberOfPlayers; i++) {
    if (playingCards.length <= 1) {
      playingCards = Deck.create()
      playingCards = Deck.shuffle(playingCards)
    }
    const player = new Player(i)
    const firstCard = player.playerFirstCard(playingCards)
    console.log(player.playerHand(playingCards, firstCard))
    // const stop = Math.floor(Math.random() * (19 - 14) + 14)
    // let sumOfHand = 0
    // let hand = Hand.currentHand(playingCards)
    // while (sumOfHand < stop) {
    //   console.log(player.playerHand(playingCards))
    //   sumOfHand += hand[hand.length - 1]
    // }
  }
} catch (e) {
  console.error(e.message)
}
