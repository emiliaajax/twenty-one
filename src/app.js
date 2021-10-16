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
import { DrawPile } from './DrawPile.js'
import { DiscardPile } from './DiscardPile.js'

try {
  // Create 52 playing cards and...
  const deck = Deck.create()

  // ...shuffle them.
  Deck.shuffle(deck)

  // Lägg kortleken i draghögen
  DrawPile.pile = deck

  // Något bättre, men borde ändras!
  const numberOfPlayers = Number(process.argv.pop())

  // Delaern skapas samt en vektor som ska hålla alla spelare
  const players = []

  // Skapa samtliga spelare och ger varsitt kort till dem
  for (let i = 1; i <= numberOfPlayers; i++) {
    const player = new Player(i)
    players.push(player)
    player.cards.push(Dealer.dealOneCard())
  }

  let player = players[0]
  // let playerCards = player.cards
  // playerCards.push(Dealer.dealOneCard())
  player.playerHand()

  for (let i = 1; i < players.length; i++) {
    const player = players[i]
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
  }

  // // Ger varsitt kort till alla spelare
  // for (let i = 1; i <= numberOfPlayers; i++) {
  //   const playerFirstCard = Dealer.dealOneCard()
  //   players.push(playerFirstCard)
  // }

  // // Spelet börjar
  // for (let i = 1; i <= numberOfPlayers; i++) {
  //   // Om det bara är ett kort kvar i kortleken skapas den om och blandas. Detta måste skrivas om draghög och slänghög istället.
  //   if (playingCards.length <= 1) {
  //     playingCards = Deck.create()
  //     playingCards = Deck.shuffle(playingCards)
  //   }

  //   // Spelare nummer i skapas
  //   const player = new Player(i)

  //   // Det första kortet ges till spelaren
  //   player.firstCard = players.shift()

  //   // Det andra kortet
  //   player.secondCard = Dealer.dealOneCard(playingCards)

  //   // Resterande kort delas ut till spelaren tills den är nöjd, vinner eller blir tjock
  //   player.fullHand = player.playerHand(playingCards)
  //   const playerFullHand = player.fullHand

  //   let string = ''
  //   const playerResultString = player.toString()
  //   const playerResult = playerFullHand[playerFullHand.length - 2]
  //   if (playerResult === 'WIN') {
  //     string = `${playerResultString}\nDealer   : -\nPlayer wins!\n`
  //   } else if (playerResult === 'LOSE') {
  //     string = `${playerResultString} YOU FAT! YOU OUT!\nDealer   : -\nDealer wins!\n`
  //   } else {
  //     dealer.fullHand = Dealer.dealerHand(playingCards)
  //     const dealerFullHand = dealer.fullHand
  //     const dealerResultString = dealer.toString()
  //     const dealerResult = dealerFullHand[dealerFullHand.length - 2]
  //     if (dealerResult === 'WIN') {
  //       string = `${playerResultString}\n${dealerResultString}\nDealer wins!\n`
  //     } else if (dealerResult === 'LOSE') {
  //       string = `${playerResultString}\n${dealerResultString} YOU FAT! YOU OUT!\nPlayer wins!\n`
  //     } else {
  //       string = `${playerResultString}\n${dealerResultString}`
  //       if (playerFullHand.pop() > dealerFullHand.pop()) {
  //         string += '\nPlayer wins!\n'
  //       } else {
  //         string += '\nDealer wins!\n'
  //       }
  //     }
  //   }
  //   console.log(string)
  // }
} catch (e) {
  console.error(e.message)
}
