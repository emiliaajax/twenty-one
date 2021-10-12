

export class Hand {
  /**
   * Returns one card as an array with the suit and rank as the first element and the primitive value of the card.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with suit and rank as first element and primitive value as second.
   */
  static onePlayingCard (playingCards) {
    const hand = []
    let currentCard = 0
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // const stop = Math.floor(Math.random() * (19 - 14) + 14)
    // while (sumOfHand < stop) {
    currentCard = playingCards.shift()
    hand.push(currentCard.toString())
    const sumOfHand = currentCard.valueOf()
    hand.push(sumOfHand)
    return hand
  // }
  // return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }
}
