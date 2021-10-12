

export class Hand {

  static currentHand (playingCards) {
    const hand = []
    let sumOfHand = 0
    let currentCard = 0
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const stop = Math.floor(Math.random() * (19 - 14) + 14)
    while (sumOfHand < stop) {
      currentCard = playingCards.shift()
      hand.push(currentCard.toString())
      sumOfHand += currentCard.valueOf()
    }
    hand.push(sumOfHand)
    return hand
    // return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }
}
