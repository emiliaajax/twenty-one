/**
 * Module for game loop.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

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
  // Create 52 playing card and...
  DrawPile.pile = DrawPile.create()

  // ... shuffle them.
  DrawPile.shuffle(DrawPile.pile)

  // Create dealer and an array to contain all players
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

  // The game loop
  for (let i = 0; i < players.length; i++) {
    let finalResult = ''
    const player = players[i]
    const playerResult = player.playerHand()
    if (immediateWin(playerResult)) {
      finalResult = `${player.toString()}\nDealer   : -\nPlayer wins!\n`
    }
    if (isBusted(playerResult)) {
      finalResult = `${player.toString()} YOU HUGE!\nDealer   : -\nDealer wins!\n`
    }
    if (!immediateWin(playerResult) && !isBusted(playerResult)) {
      const dealerResult = dealer.dealerHand()
      if (immediateWin(dealerResult)) {
        finalResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
      }
      if (isBusted(dealerResult)) {
        finalResult = `${player.toString()}\n${dealer.toString()} YOU HUGE!\nPlayer wins!\n`
      }
      if (!immediateWin(dealerResult) && !isBusted(dealerResult)) {
        finalResult = letUsCompareHands(player, dealer)
      }
    }
    console.log(finalResult)

    // Throw dealer and player hand of cards to discard pile
    let allCards = player.cards.concat(dealer.cards)
    player.cards = []
    dealer.cards = []
    for (let k = 0; k < allCards.length; k++) {
      DiscardPile.pile.push(allCards[k])
    }
    allCards = []
  }
}

// //HELP FUNCTIONS// //

/**
 * Returns true if the result is a win, false otherwise.
 *
 * @param {string} result The result of the hand.
 * @returns {boolean} True if the result is a win, false otherwise.
 */
function immediateWin (result) {
  return result === 'WIN'
}

/**
 * Returns true if the result is lose, false otherwise.
 *
 * @param {string} result The result of the hand.
 * @returns {boolean} True if the result is lose, false otherwise.
 */
function isBusted (result) {
  return result === 'LOSE'
}

/**
 * Returns the final result after comparing player and dealer hands.
 *
 * @param {object} player The current player object.
 * @param {object} dealer The dealer object.
 * @returns {string} A string with the final result.
 */
function letUsCompareHands (player, dealer) {
  let finalResult = ''
  if (player.sum > dealer.sum) {
    finalResult = `${player.toString()}\n${dealer.toString()}\nPlayer wins!\n`
  } else {
    finalResult = `${player.toString()}\n${dealer.toString()}\nDealer wins!\n`
  }
  return finalResult
}
