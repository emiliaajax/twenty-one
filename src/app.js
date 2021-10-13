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
import { Hand } from './Hand.js'

try {
  // Create 52 playing cards and...
  let playingCards = Deck.create()

  // ...shuffle them.
  Deck.shuffle(playingCards)
  console.log(playingCards)

  //Något bättre, men borde ändras!
  const numberOfPlayers = Number(process.argv.pop())
  const dealer = new Dealer()
  const players = []
  for (let i = 1; i <= numberOfPlayers; i++) {
    const playerFirstCard = Hand.firstCard(playingCards)
    players.push(playerFirstCard)
  }
  for (let i = 1; i <= numberOfPlayers; i++) {
    if (playingCards.length <= 1) {
      playingCards = Deck.create()
      playingCards = Deck.shuffle(playingCards)
    }
    const player = new Player(i)
    player.numberOneCard = players.shift()
    player.fullHand = player.playerHand(playingCards)
    const playerFullHand = player.fullHand
    let string = ''
    const playerResultString = player.toString()
    const playerResult = playerFullHand[playerFullHand.length - 2]
    if (playerResult === 'WIN') {
      string = `${playerResultString}\nDealer: -\nPlayer wins\n`
    } else if (playerResult === 'LOSE') {
      string = `${playerResultString} BUSTED!\nDealer: -\nDealer wins!\n`
    } else {
      dealer.fullHand = dealer.dealerHand(playingCards)
      const dealerFullHand = dealer.fullHand
      const dealerResultString = dealer.toString()
      const dealerResult = dealerFullHand[dealerFullHand.length - 2]
      if (dealerResult === 'WIN') {
        string = `${playerResultString}\n${dealerResultString}\nDealer wins!\n`
      } else if (dealerResult === 'LOSE') {
        string = `${playerResultString}\n${dealerResultString} BUSTED!\nPlayer wins!\n`
      } else {
        string = `${playerResultString}\n${dealerResultString}`
        if (playerFullHand.pop() > dealerFullHand.pop()) {
          string += '\nPlayer wins!\n'
        } else {
          string += '\nDealer wins!\n'
        }
      }
    }
    console.log(string)
  }
} catch (e) {
  console.error(e.message)
}
