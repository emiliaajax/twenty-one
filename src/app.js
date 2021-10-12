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

  //Fruktansvärd kod, måste ändras!
  const numberOfPlayers = Number(process.argv.pop())
  const dealer = new Dealer()
  for (let i = 1; i <= numberOfPlayers; i++) {
    if (playingCards.length <= 1) {
      playingCards = Deck.create()
      playingCards = Deck.shuffle(playingCards)
    }
    const player = new Player(i)
    const firstCard = player.playerFirstCard(playingCards)
    const playerResult = player.toString(playingCards, firstCard)
    if (playerResult.search('WIN') !== -1) {
      console.log(playerResult + '\nDealer: -\nPlayer wins')
    } else if (playerResult.search('LOSE') !== -1) {
      console.log(playerResult + ' BUSTED!\nDealer: -\nDealer wins!')
    } else {
      const dealerResult = dealer.toString(playingCards)
      if (dealerResult.search('WIN') !== -1) {
        console.log(playerResult + `\n${dealerResult}\nDealer wins!`)
      } else if (dealerResult.search('LOSE') !== -1) {
        console.log(playerResult + `\n${dealerResult} BUSTED!\nPlayer wins!`)
      } else {
        const dealerArray = dealerResult.split(' ')
        let dealerPoints = dealerArray.splice(-1).pop()
        dealerPoints = Number(dealerPoints.charAt(1) + dealerPoints.charAt(2))
        const playerArray = playerResult.split(' ')
        let playerPoints = playerArray.splice(-1).pop()
        playerPoints = Number(playerPoints.charAt(1) + playerPoints.charAt(2))
        console.log(playerResult + '\n' + dealerResult)
        if (playerPoints > dealerPoints) {
          console.log('Player wins!\n')
        } else {
          console.log('Dealer wins!\n')
        }
      }
    }
  }
} catch (e) {
  console.error(e.message)
}
