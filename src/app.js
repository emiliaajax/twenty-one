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

  const numberOfPlayers = Number(process.argv.pop())

  // Delaern skapas samt en vektor som ska hålla alla spelare
  const players = []
  const dealer = new Dealer()
  DiscardPile.pile = []

  // Skapa samtliga spelare och ger varsitt kort till dem
  for (let j = 1; j <= numberOfPlayers; j++) {
    const player = new Player(j)
    players.push(player)
    player.cards.push(player.demandACard())
  }
  for (let i = 0; i < numberOfPlayers; i++) {
    const player = players[i]
    const playerResult = player.playerHand()
    let string = ''
    if (playerResult === 'WIN') {
      string = `${player.toString()}\nDealer   : -\nPlayer wins!\n`
    } else if (playerResult === 'LOSE') {
      string = `${player.toString()} YOU FAT! YOU OUT!\nDealer   : -\nDealer wins!\n`
    } else {
      const dealerResult = dealer.dealerHand()
      if (dealerResult === 'WIN') {
        string = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
      } else if (dealerResult === 'LOSE') {
        string = `${player.toString()}\n${dealer.toString()} YOU FAT! YOU OUT!\nPlayer wins!\n`
      } else {
        string = `${player.toString()}\n${dealer.toString()}`
        if (player.sum > dealer.sum) {
          string += '\nPlayer wins!\n'
        } else {
          string += '\nDealer wins!\n'
        }
      }
    }
    console.log(string)
    const allCards = player.cards.concat(dealer.cards)
    player.cards = []
    dealer.cards = []
    for (let i = 0; i < allCards.length; i++) {
      DiscardPile.pile.push(allCards[i])
    }
  }
} catch (e) {
  console.error(e.message)
}
