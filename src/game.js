/**
 * Module for game loop.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { DrawPile } from './DrawPile.js'
import { DiscardPile } from './DiscardPile.js'

/**
 * Starts the game and prints the result in the console.
 *
 * @param {number} numberOfPlayers The number of players.
 */
export function start (numberOfPlayers) {
  // Create 52 playing cards and...
  const deck = Deck.create()

  // ...shuffle them.
  Deck.shuffle(deck)

  // Put the deck of cards in the draw pile
  DrawPile.pile = deck

  // Create the dealer and an array to contain all the players
  const players = []
  const dealer = new Dealer()

  // Create an empty discard pile
  DiscardPile.pile = []

  // Create all the players and give them a card each
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
    let allCards = player.cards.concat(dealer.cards)
    player.cards = []
    dealer.cards = []
    for (let i = 0; i < allCards.length; i++) {
      DiscardPile.pile.push(allCards[i])
      allCards = []
    }
  }
}
