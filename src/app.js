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

  //Fruktansvärd kod, måste ändras!
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
    console.log(playerFullHand)
    let string = ''
    const playerResult = player.toString()
    if (playerFullHand[-2] === 'WIN') {
      string = `${playerResult}\nDealer: -\nPlayer wins\n`
    } else if (playerFullHand[-2] === 'LOSE') {
      string = `${playerResult} BUSTED!\nDealer: -\nDealer wins!\n`
    } else {
      
    }
    // if (playerResult.search('WIN') !== -1) {
    //   string = `${playerResult}\nDealer: -\nPlayer wins\n`
    // } else if (playerResult.search('LOSE') !== -1) {
    //   string = `${playerResult} BUSTED!\nDealer: -\nDealer wins!\n`
    // } else {
      const dealerResult = dealer.toString(playingCards)
      if (dealerResult.search('WIN') !== -1) {
        string = `${playerResult}\n${dealerResult}\nDealer wins!\n`
      } else if (dealerResult.search('LOSE') !== -1) {
        string = `${playerResult}\n${dealerResult} BUSTED!\nPlayer wins!\n`
      } else {
        const dealerArray = dealerResult.split(' ')
        let dealerPoints = dealerArray.splice(-1).pop()
        dealerPoints = Number(dealerPoints.charAt(1) + dealerPoints.charAt(2))
        const playerArray = playerResult.split(' ')
        let playerPoints = playerArray.splice(-1).pop()
        playerPoints = Number(playerPoints.charAt(1) + playerPoints.charAt(2))
        string = `${playerResult}\n${dealerResult}`
        if (playerPoints > dealerPoints) {
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
